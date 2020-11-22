import {PostListModelService} from "./postlist";
import {ModelGetResult, ModelPatchResult, ModelPostResult, ModelServiceArgs} from "./model";
import {Transaction} from "sequelize";

export class FakeDeleteModelService<T = any, T2 = any> extends PostListModelService<T, T2> {
  protected modelIsDeletedAttribute = "deleted";

  public async get(args: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<ModelGetResult<T, T2>> {
    args.params[this.modelIsDeletedAttribute] = false;
    return super.get(args, transaction, skipLocked);
  }

  public async delete(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPatchResult<T, T2>> {
    args.body[this.modelIsDeletedAttribute] = true;
    return super.patch(args, transaction);
  }

  public async patch(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPatchResult<T, T2>> {
    if (args.body[this.modelIsDeletedAttribute]) {
      delete args.body[this.modelIsDeletedAttribute];
    }
    return super.patch(args, transaction);
  }

  public async post(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPostResult<T, T2>> {
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
