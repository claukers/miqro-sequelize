import {FakeDeleteModelService} from "./deleted";
import {ModelGetResult, ModelPatchResult, ModelPostResult, ModelServiceArgs} from "./model";
import {Transaction} from "sequelize";
import {ParseOptionsError} from "@miqro/core";


export class AccountModelService<T = any, T2 = any> extends FakeDeleteModelService<T, T2> {
  public async get(args: ModelServiceArgs, transaction?: Transaction, skipLocked?: boolean): Promise<ModelGetResult<T, T2>> {
    if (!args.session) {
      throw new ParseOptionsError("req.session not valid");
    }
    args.params.account = args.session.account;
    return super.get(args, transaction, skipLocked);
  }

  public post(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPostResult<T, T2>> {
    if (args.body instanceof Array) {
      args.body = args.body.map(body => {
        if (!args.session) {
          throw new ParseOptionsError("req.session not valid");
        }
        body.account = args.session.account;
        return body;
      }) as any;
    } else {
      if (!args.session) {
        throw new ParseOptionsError("req.session not valid");
      }
      args.body.account = args.session.account;
    }
    return super.post(args, transaction);
  }

  public patch(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPatchResult<T, T2>> {
    if (!args.session) {
      throw new ParseOptionsError("req.session not valid");
    }
    args.params.account = args.session.account;
    args.body.account = args.session.account;
    return super.patch(args, transaction);
  }

  public delete(args: ModelServiceArgs, transaction?: Transaction): Promise<ModelPatchResult<T, T2>> {
    if (!args.session) {
      throw new ParseOptionsError("req.session not valid");
    }
    args.params.account = args.session.account;
    return super.delete(args, transaction);
  }
}
