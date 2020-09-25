import {PostListModelService} from "./postlist";
import {ModelServiceArgs} from "./model";
import {Transaction} from "sequelize";

export class FakeDeleteModelService extends PostListModelService {
  protected modelIsDeletedAttribute = "deleted";

  public async get(args: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<any> {
    args.params[this.modelIsDeletedAttribute] = false;
    return super.get(args, transaction, skipLocked);
  }

  public async delete(args: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    args.body[this.modelIsDeletedAttribute] = true;
    return super.patch(args, transaction);
  }

  public async patch(args: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    if (args.body[this.modelIsDeletedAttribute]) {
      delete args.body[this.modelIsDeletedAttribute];
    }
    return super.patch(args, transaction);
  }

  public async post(args: ModelServiceArgs, transaction?: Transaction): Promise<any> {
    if (args.body instanceof Array) {
      for (const rBody of args.body) {
        rBody[this.modelIsDeletedAttribute] = false;
      }
      return super.post(args, transaction);
    } else {
      args.body[this.modelIsDeletedAttribute] = false;
      return super.post(args, transaction);
    }
  }
}
