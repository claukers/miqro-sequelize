import {ParseOption, ParseOptionsError, Util} from "@miqro/core";
import {col as SequelizeCol, fn as SequelizeFN, Model, ModelCtor, Op, Transaction, WhereOptions} from "sequelize";
import {AbstractModelService} from "./amodel";
import {Database} from "./db";
import {
  attributesParseOption,
  groupParseOption,
  includeParseOption,
  ModelGet,
  ModelServiceArgs,
  ModelServiceIncludeQuery,
  ModelServiceOptions,
  ModelServiceOrderQuery,
  ModelServicePaginationQuery,
  orderParseOption,
  paginationParseOption
} from "./model";

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
      this.getQueryParseOptions.push(attributesParseOption);
      this.getQueryParseOptions.push(groupParseOption);
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
      if (!options.disableAttributeQuery) {
        this.getQueryParseOptions.push(attributesParseOption);
      }
      if (!options.disableGroupQuery) {
        this.getQueryParseOptions.push(groupParseOption);
      }
    }
  }

  public async get({body, query, params}: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<ModelGet<T, T2>> {
    Util.parseOptions("body", body, [], "no_extra");
    const {pagination, include, order, attributes, group} = Util.parseOptions("query", query, this.getQueryParseOptions, "no_extra");

    if (attributes) {
      for (let i = 0; i < (attributes as any[]).length; i++) {
        const attribute = (attributes as any[])[i];
        if (typeof attribute !== "string") {
          const {fn, col, name} = Util.parseOptions(`query.attributes`, attribute, [
            {name: "fn", type: "enum", enumValues: ["sum"], required: true},
            {name: "col", type: "string", required: true},
            {name: "name", type: "string", required: true}
          ], "no_extra");
          try {
            (attributes as any[])[i] = [SequelizeFN(fn as string, SequelizeCol(col as string)), name as string];
          } catch (e) {
            throw new ParseOptionsError(`bad query.attributes`);
          }
        }
      }
    }
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
      attributes: attributes as any,
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
      limit: (pagination as ModelServicePaginationQuery).limit,
      offset: (pagination as ModelServicePaginationQuery).offset,
      group: group as string[],
      transaction,
      lock: true,
      skipLocked
    }) : this.model.findAndCountAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
      limit: (pagination as ModelServicePaginationQuery).limit,
      offset: (pagination as ModelServicePaginationQuery).offset,
      group: group as string[],
    })) : (transaction ? this.model.findAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      order: order as ModelServiceOrderQuery,
      include: include as any,
      group: group as string[],
      transaction,
      lock: true,
      skipLocked
    }) : this.model.findAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      group: group as string[],
      order: order as ModelServiceOrderQuery,
      include: include as any,
    }))
  }

  public async post({body, query, params}: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    Util.parseOptions("params", params, [], "no_extra");
    Util.parseOptions("query", query, [], "no_extra");
    // noinspection JSDeprecatedSymbols
    return this.model.create(body as any, transaction ? {transaction} : undefined);
  }

  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  public async patch({body, query, params, session}: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    Util.parseOptions("query", query, [], "no_extra");
    const patch = Util.parseOptions("body", body, [], "add_extra");
    if (
      typeof patch !== "object" ||
      (patch as any) instanceof Array) {
      throw new ParseOptionsError(`patch not object`);
    }
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
        tR.push(instance.update(body, transaction ? {transaction} : undefined));
      }
      return Promise.all(tR);
    } else if (instances.length === 1) {
      return instances[0].update(body, transaction ? {transaction} : undefined);
    } else {
      return null;
    }
  }

  public async delete({body, query, params, session}: ModelServiceArgs, transaction?: Transaction): Promise<any> {
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
        tR.push(instance.destroy(transaction ? {transaction} : undefined));
      }
      return Promise.all(tR);
    } else if (instances.length === 1) {
      return instances[0].destroy(transaction ? {transaction} : undefined);
    } else {
      return null;
    }
  }
}
