import {ModelService} from "./smodel";
import {ModelPostResult, ModelServiceArgs} from "./model";
import {Util} from "@miqro/core";
import {Model, Transaction} from "sequelize";

export class PostListModelService<T = any, T2 = any> extends ModelService<T, T2> {

  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  public async post(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPostResult<T, T2>> {
    if (args.body instanceof Array) {
      Util.parseOptions("params", args.params, [], "no_extra");
      Util.parseOptions("query", args.query, [], "no_extra");
      // noinspection JSDeprecatedSymbols
      return this.model.bulkCreate(args.body, transaction ? {transaction} : undefined);
    } else {
      return super.post(args, transaction);
    }
  }
}
