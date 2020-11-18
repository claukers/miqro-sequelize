import { ParseOption, ParseOptionsError, Util } from "@miqro/core";
import { Model, ModelCtor, Op, Transaction, WhereOptions } from "sequelize";
import { AbstractModelService } from "./amodel";
import { Database } from "./db";
import { includeParseOption, ModelGet, ModelServiceArgs, ModelServiceIncludeQuery, ModelServiceOptions, ModelServiceOrderQuery, ModelServicePaginationQuery, orderParseOption, paginationParseOption } from "./model";

export class ModelService<T = any, T2 = any> extends AbstractModelService {
  protected getQueryParseOptions: ParseOption[];
  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  constructor(protected model: ModelCtor<Model<T, T2>>, protected db: Database = Database.getInstance(), protected options?: ModelServiceOptions) {
    super();
    this.getQueryParseOptions = [];
    if (!options) {
      this.getQueryParseOptions.push(includeParseOption);
      this.getQueryParseOptions.push(paginationParseOption);
      this.getQueryParseOptions.push(orderParseOption);
    } else {
      if (!options.disableIncludeQuery) {
        this.getQueryParseOptions.push(includeParseOption);
      }
      if (!options.disableOrderQuery) {
        this.getQueryParseOptions.push(orderParseOption);
      }
      if (!options.disablePaginationQuery) {
        this.getQueryParseOptions.push(paginationParseOption);
      }
    }
  }

  public async get({ body, query, params }: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<ModelGet<T, T2>> {
    Util.parseOptions("body", body, [], "no_extra");
    const { pagination, include, order } = Util.parseOptions("query", query, this.getQueryParseOptions, "no_extra");
    if (order) {
      for (const o of (order as ModelServiceOrderQuery)) {
        if (o.length !== 2 || (o[1] !== "DESC" && o[1] !== "ASC")) {
          throw new ParseOptionsError(`query.order not array of [column, "DESC"|"ASC"]`);
        }
      }
    }
    if (include) {
      // fix include.model to db.models[...]
      for (const includeA of (include as ModelServiceIncludeQuery)) {
        const modelA = this.db.models[includeA.model];
        if (!modelA) {
          throw new ParseOptionsError(`query.include[${includeA.model}] model doesnt exists!`);
        } else {
          includeA.model = modelA as any;
          if (includeA.include) {
            for (const includeB of includeA.include) {
              const modelB = this.db.models[includeB.model];
              if (!modelB) {
                throw new ParseOptionsError(`query.include[${includeB.model}] model doesnt exists!`);
              } else {
                includeB.model = modelB as any;
              }
            }
          }
        }
      }
    }
    if (pagination && (pagination as ModelServicePaginationQuery).search) {
      const paginationQuery: ModelServicePaginationQuery = pagination as ModelServicePaginationQuery;
      if (paginationQuery.search && paginationQuery.search.columns.length > 0) {
        const searchParams: any = {};
        for (const column of paginationQuery.search.columns) {
          searchParams[column] = {
            [Op.like]: "%" + paginationQuery.search.query + "%"
          };
        }
        params = {
          [Op.and]: params,
          [Op.or]: searchParams
        } as any;
      }
    }

    return pagination ? (transaction ? this.model.findAndCountAll({
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
      limit: (pagination as ModelServicePaginationQuery).limit,
      offset: (pagination as ModelServicePaginationQuery).offset,
      transaction,
      lock: true,
      skipLocked
    }) : this.model.findAndCountAll({
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
      limit: (pagination as ModelServicePaginationQuery).limit,
      offset: (pagination as ModelServicePaginationQuery).offset,
    })) : (transaction ? this.model.findAll({
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
      transaction,
      lock: true,
      skipLocked
    }) : this.model.findAll({
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
    }))
  }

  public async post({ body, query, params }: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    Util.parseOptions("params", params, [], "no_extra");
    Util.parseOptions("query", query, [], "no_extra");
    // noinspection JSDeprecatedSymbols
    return this.model.create(body as any, transaction ? { transaction } : undefined);
  }

  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  public async patch({ body, query, params, session }: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    Util.parseOptions("query", query, [], "no_extra");
    const result = await this.get({
      body: {},
      query,
      session,
      params
    }, transaction);
    const instances = result instanceof Array ? result : result.rows;
    if (this.options && this.options.enableMultiInstancePatch && instances.length > 0) {
      const tR = [];
      for (const instance of instances) {
        tR.push(instance.update(body, transaction ? { transaction } : undefined));
      }
      return tR;
    } else if (instances.length === 1) {
      return instances[0].update(body, transaction ? { transaction } : undefined);
    } else {
      return null;
    }
  }

  public async delete({ body, query, params, session }: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    Util.parseOptions("query", query, [], "no_extra");
    Util.parseOptions("body", body, [], "no_extra");
    const result = await this.get({
      body: {},
      query,
      session,
      params
    }, transaction);
    const instances = result instanceof Array ? result : result.rows;
    if (this.options && this.options.enableMultiInstanceDelete && instances.length > 0) {
      const tR = [];
      for (const instance of instances) {
        tR.push(instance.destroy(transaction ? { transaction } : undefined));
      }
      return tR;
    } else if (instances.length === 1) {
      return instances[0].destroy(transaction ? { transaction } : undefined);
    } else {
      return null;
    }
  }
}
