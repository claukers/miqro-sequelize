import {ModelService} from "./smodel";
import {ModelServiceArgs} from "./model";
import {Util} from "@miqro/core";
import {Transaction} from "sequelize";

export class PostListModelService extends ModelService {

  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  public async post(args: ModelServiceArgs, transaction?: Transaction): Promise<any> {
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
