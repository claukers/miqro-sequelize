import { IServiceArgs, ParseOptionsError, Util } from "miqro-core";
import { Database } from "../../db";
export { Op } from "sequelize";

export interface IModelService {
  get(options: IServiceArgs): Promise<any>;
  post(options: IServiceArgs): Promise<any>;
  put(options: IServiceArgs): Promise<any>;
  patch(options: IServiceArgs): Promise<any>;
  delete(options: IServiceArgs): Promise<any>;
}

export const parseIncludeQuery = (includeQuery: any[]): any[] => {
  const ret = [];
  for (const includeModel of includeQuery) {
    if (typeof includeModel === "string") {
      const model = Database.getInstance().models[includeModel];
      if (model) {
        ret.push(model);
      } else {
        throw new ParseOptionsError(`query.include[${includeModel}] model doesnt exists!`);
      }
    } else if (typeof includeModel === "object") {
      const includeO = Util.parseOptions("query.include[n]", includeModel, [
        { name: "model", type: "string", required: true },
        { name: "required", type: "boolean", required: true },
        { name: "where", type: "object", required: true },
        { name: "include", type: "array", arrayType: "any", required: false }
      ], "no_extra");
      const model = Database.getInstance().models[includeO.model];
      if (model) {
        if (includeO.include) {
          ret.push({
            model,
            required: includeO.required,
            where: includeO.where,
            include: parseIncludeQuery(includeO.include)
          });
        } else {
          ret.push({
            model,
            required: includeO.required,
            where: includeO.where
          });
        }
      } else {
        throw new ParseOptionsError(`query.include[${includeO.model}] model doesnt exists!`);
      }
    } else {
      throw new ParseOptionsError(`problem with your query.include!`);
    }
  }
  return ret;
};