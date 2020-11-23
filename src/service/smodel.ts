import {ParseOption, ParseOptionsError, Util} from "@miqro/core";
import {col as SequelizeCol, fn as SequelizeFN, Model, ModelCtor, Op, Transaction, WhereOptions} from "sequelize";
import {AbstractModelService} from "./amodel";
import {Database} from "./db";
import {
  attributesParseOption,
  groupParseOption,
  ModelDeleteResult,
  ModelGetResult, ModelPatchResult, ModelPostResult,
  ModelServiceArgs,
  ModelServiceOptions,
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
      this.getQueryParseOptions = this.getQueryParseOptions.concat(paginationParseOption);
      this.getQueryParseOptions.push(orderParseOption);
      this.getQueryParseOptions.push(attributesParseOption);
      this.getQueryParseOptions.push(groupParseOption);
    } else {
      if (!options.disableOrderQuery) {
        this.getQueryParseOptions.push(orderParseOption);
      }
      if (!options.disablePaginationQuery) {
        this.getQueryParseOptions = this.getQueryParseOptions.concat(paginationParseOption);
      }
      if (!options.disableAttributesQuery) {
        this.getQueryParseOptions.push(attributesParseOption);
      }
      if (!options.disableGroupQuery) {
        this.getQueryParseOptions.push(groupParseOption);
      }
    }
  }

  public async get({body, query, params}: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<ModelGetResult<T, T2>> {
    Util.parseOptions("body", body, [], "no_extra");
    const {limit, offset, searchColumns, searchQuery, order, attributes, group} = Util.parseOptions("query", query, this.getQueryParseOptions, "no_extra");

    if (offset !== undefined && limit === undefined) {
      throw new ParseOptionsError(`query.limit needed for query.offset`);
    }

    if (offset === undefined && limit !== undefined) {
      throw new ParseOptionsError(`query.offset needed for query.limit`);
    }

    if (searchColumns === undefined && searchQuery !== undefined) {
      throw new ParseOptionsError(`query.searchColumns needed for query.searchQuery`);
    }

    if (attributes) {
      for (let i = 0; i < (attributes as string[]).length; i++) {
        const attribute = (attributes as string[])[i];
        const fn = attribute.split(",").map(s => s.trim());
        if (fn.length > 1) {
          // attribute is a SequelizeFN not a column string
          if (fn.length !== 3) {
            throw new ParseOptionsError(`query.attributes [${attribute}] not valid!`);
          }
          const [fnName, col, name] = fn;
          Util.parseOptions(`query.attributes`, {fn: fnName, col, name}, [
            {name: "fn", type: "enum", enumValues: ["sum"], required: true},
            {name: "col", type: "string", required: true},
            {name: "name", type: "string", required: true}
          ], "no_extra");

          try {
            (attributes as any[])[i] = [SequelizeFN(fnName, SequelizeCol(col as string)), name as string];
          } catch (e) {
            throw new ParseOptionsError(`bad query.attributes [${attribute}]`);
          }
        }
      }
    }
    if (order) {
      for (let i = 0; i < (order as string[]).length; i++) {
        (order as any)[i] = (order as string[])[i].split(",").map(s => s.trim());
        const orderI = (order as string[][])[i];
        if (!(orderI instanceof Array) || orderI.length !== 2 || (orderI[1] !== "DESC" && orderI[1] !== "ASC") || typeof orderI[0] !== "string") {
          throw new ParseOptionsError(`query.order not array of [column, "DESC"|"ASC"]`);
        }
      }
    }
    if (searchQuery && searchColumns) {
      const searchParams: any = {};
      for (const column of (searchColumns as string[])) {
        searchParams[column] = {
          [Op.like]: "%" + searchQuery + "%"
        };
      }
      params = {
        [Op.and]: params,
        [Op.or]: searchParams
      } as any;
    }

    return limit !== undefined && offset !== undefined ? (transaction ? this.model.findAndCountAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      order: order as any,
      include: this.options && this.options.include ? this.options.include : undefined,
      limit: limit as number,
      offset: offset as number,
      group: group as string[],
      transaction,
      lock: true,
      skipLocked
    }) : this.model.findAndCountAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      order: order as any,
      include: this.options && this.options.include ? this.options.include : undefined,
      limit: limit as number,
      offset: offset as number,
      group: group as string[],
    })) : (transaction ? this.model.findAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      order: order as any,
      include: this.options && this.options.include ? this.options.include : undefined,
      group: group as string[],
      transaction,
      lock: true,
      skipLocked
    }) : this.model.findAll({
      attributes: attributes as any,
      where: params as WhereOptions,
      group: group as string[],
      order: order as any,
      include: this.options && this.options.include ? this.options.include : undefined,
    }))
  }

  public async post({body, query, params}: ModelServiceArgs, transaction?: Transaction): Promise<ModelPostResult<T, T2>> {
    Util.parseOptions("params", params, [], "no_extra");
    Util.parseOptions("query", query, [], "no_extra");
    // noinspection JSDeprecatedSymbols
    return this.model.create(body as any, transaction ? {transaction} : undefined);
  }

  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  public async patch({body, query, params, session}: ModelServiceArgs, transaction?: Transaction): Promise<ModelPatchResult<T, T2>> {
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

  public async delete({body, query, params, session}: ModelServiceArgs, transaction?: Transaction): Promise<ModelDeleteResult | ModelPatchResult<T, T2>> {
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
