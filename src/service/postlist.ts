import {
  Util
} from "@miqro/core";
import {
  ModelService
} from "./model";

export class PostListModelService extends ModelService {
  public async post(args, transaction?): Promise<any> {
    if (args.body instanceof Array) {
      Util.parseOptions("params", args.params, [], "no_extra");
      Util.parseOptions("query", args.query, [], "no_extra");
      // noinspection JSDeprecatedSymbols
      if (transaction) {
        return this.model.bulkCreate(args.body, {transaction});
      } else {
        return this.model.bulkCreate(args.body);
      }
    } else {
      return super.post(args, transaction);
    }
  }
}
