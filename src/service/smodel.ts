import {AbstractModelService} from "./amodel";
import {ParseOptionsError, Util} from "@miqro/core";
import {ModelServiceArgs, parseIncludeQuery} from "./model";
import {Model, ModelCtor, Op, Transaction, WhereOptions} from "sequelize";
import {Database} from "./db";

export type ModelGet<T, T2> = Model<T, T2>[] | { rows: Model<T, T2>[]; count: number; };

export class ModelService<T = any, T2 = any> extends AbstractModelService {
  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  constructor(protected model: ModelCtor<Model<T, T2>>, protected db: Database = new Database()) {
    super();
  }

  public async get({body, query, params}: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<ModelGet<T, T2>> {
    const {pagination, include, order} = Util.parseOptions("query", query, [
      {name: "include", type: "string", required: false},
      {name: "pagination", type: "string", required: false},
      {name: "order", type: "string", required: false}
    ], "no_extra");
    let includeModels = [];
    if (include) {
      let includeList = [];
      try {
        includeList = JSON.parse(include as string);
      } catch (e) {
        throw new ParseOptionsError(`query.include not a valid JSON`);
      }
      includeModels = parseIncludeQuery(includeList, this.db);
    }
    let paginationJSON;
    if (pagination) {
      try {
        paginationJSON = JSON.parse(pagination as string);
      } catch (e) {
        throw new ParseOptionsError(`query.pagination not a valid JSON`);
      }
      Util.parseOptions("query.pagination", paginationJSON, [
        {name: "limit", type: "number", required: true},
        {name: "search", type: "object", required: false},
        {name: "offset", type: "number", required: true}
      ], "no_extra");
      if (paginationJSON.search) {
        Util.parseOptions("query.pagination.search", paginationJSON.search, [
          {name: "columns", type: "array", arrayType: "string", required: true},
          {name: "query", type: "string", required: true}
        ], "no_extra");
      }
    }
    let orderJSON;
    if (order) {
      try {
        orderJSON = JSON.parse(order as string);
      } catch (e) {
        throw new ParseOptionsError(`query.order not a valid JSON`);
      }
    }
    Util.parseOptions("body", body, [], "no_extra");
    if (pagination) {
      if (paginationJSON.search) {
        if (paginationJSON.search.columns.length > 0) {
          const searchParams: any = {};
          for (const column of paginationJSON.search.columns) {
            searchParams[column] = {
              [Op.like]: "%" + paginationJSON.search.query + "%"
            };
          }
          params = {
            [Op.and]: params,
            [Op.or]: searchParams
          } as any;
        }
      }
      return transaction ? this.model.findAndCountAll({
        where: params as WhereOptions,
        order: orderJSON,
        include: includeModels,
        limit: paginationJSON.limit,
        offset: paginationJSON.offset,
        transaction,
        lock: true,
        skipLocked
      }) : this.model.findAndCountAll({
        where: params as WhereOptions,
        order: orderJSON,
        include: includeModels,
        limit: paginationJSON.limit,
        offset: paginationJSON.offset
      });
    } else {
      return transaction ? this.model.findAll({
        where: params as WhereOptions,
        order: orderJSON,
        include: includeModels,
        transaction,
        lock: true,
        skipLocked
      }) : this.model.findAll({
        where: params as WhereOptions,
        order: orderJSON,
        include: includeModels
      });
    }
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
    const result = await this.get({
      body: {},
      query,
      session,
      params
    }, transaction);
    const instances = result instanceof Array ? result : result.rows;
    if (instances.length === 1) {
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
    if (instances.length === 1) {
      return instances[0].destroy(transaction ? {transaction} : undefined);
    } else {
      return null;
    }
  }
}
