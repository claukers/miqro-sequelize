import { IServiceArgs, ParseOptionsError, Util } from "miqro-core";
import { AbstractModelService, Op, parseIncludeQuery } from "./common";

export class ModelService extends AbstractModelService {
  constructor(protected model: any) {
    super();
  }
  public async get({ body, query, params, session }: IServiceArgs): Promise<any> {
    const { pagination, include } = Util.parseOptions("query", query, [
      { name: "include", type: "string", required: false },
      { name: "pagination", type: "string", required: false }
    ], "no_extra");
    let includeModels = [];
    if (include) {
      let includeList = [];
      try {
        includeList = JSON.parse(include);
      } catch (e) {
        throw new ParseOptionsError(`query.include not a valid JSON`);
      }
      includeModels = parseIncludeQuery(includeList);
    }
    let paginationJSON;
    if (pagination) {
      try {
        paginationJSON = JSON.parse(pagination);
      } catch (e) {
        throw new ParseOptionsError(`query.pagination not a valid JSON`);
      }
      Util.parseOptions("query.pagination", paginationJSON, [
        { name: "limit", type: "number", required: true },
        { name: "search", type: "object", required: false },
        { name: "offset", type: "number", required: true }
      ], "no_extra");
      if (paginationJSON.search) {
        Util.parseOptions("query.pagination.search", paginationJSON.search, [
          { name: "columns", type: "array", arrayType: "string", required: true },
          { name: "query", type: "string", required: true }
        ], "no_extra");
      }
    }
    Util.parseOptions("body", body, [], "no_extra");
    let ret;
    if (Object.keys(params).length > 0) {
      if (pagination) {
        if (paginationJSON.search) {
          if (paginationJSON.search.columns.length > 0) {
            const searchParams = {};
            for (const column of paginationJSON.search.columns) {
              searchParams[column] = {
                [Op.like]: "%" + paginationJSON.search.query + "%"
              };
            }
            params = {
              [Op.and]: params,
              [Op.or]: searchParams
            };
          }
        }
        ret = await this.model.findAndCountAll({
          where: params,
          include: includeModels,
          limit: paginationJSON.limit,
          offset: paginationJSON.offset
        });
      } else {
        ret = await this.model.findAll({
          where: params,
          include: includeModels
        });
      }
    } else {
      if (pagination) {
        let params2 = null;
        if (paginationJSON.search) {
          if (paginationJSON.search.columns.length > 0) {
            const searchParams = {};
            for (const column of paginationJSON.search.columns) {
              searchParams[column] = {
                [Op.like]: "%" + paginationJSON.search.query + "%"
              };
            }
            params2 = {
              [Op.or]: searchParams
            };
          }
        }
        if (params2) {
          ret = await this.model.findAndCountAll({
            where: params,
            include: includeModels,
            limit: paginationJSON.limit,
            offset: paginationJSON.offset
          });
        } else {
          ret = await this.model.findAndCountAll({
            include: includeModels,
            limit: paginationJSON.limit,
            offset: paginationJSON.offset
          });
        }
      } else {
        ret = await this.model.findAll({
          include: includeModels
        });
      }
    }
    return ret;
  }
  public async post({ body, query, params, session }: IServiceArgs): Promise<any> {
    Util.parseOptions("params", params, [], "no_extra");
    Util.parseOptions("query", query, [], "no_extra");
    return this.model.create(body);
  }
  public async patch({ body, query, params, session }: IServiceArgs): Promise<any> {
    Util.parseOptions("query", query, [], "no_extra");
    const instances = await this.get({
      session,
      body: {},
      query,
      params,
      headers: {}
    });
    if (instances.length === 1) {
      return instances[0].update(body);
    } else {
      return null;
    }
  }
  public async delete({ body, query, params, session }: IServiceArgs): Promise<any> {
    Util.parseOptions("query", query, [], "no_extra");
    Util.parseOptions("body", body, [], "no_extra");
    const instances = await this.get({
      session,
      body: {},
      query,
      params,
      headers: {}
    });
    if (instances.length === 1) {
      return instances[0].destroy();
    } else {
      return null;
    }
  }
}
