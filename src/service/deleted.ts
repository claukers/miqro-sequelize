import {
  PostListModelService
} from "./postlist";

export class FakeDeleteModelService extends PostListModelService {
  protected modelIsDeletedAttribute: string = "deleted";
  public async get(args) {
    args.params[this.modelIsDeletedAttribute] = false;
    return super.get(args);
  }

  public async delete(args) {
    args.body[this.modelIsDeletedAttribute] = true;
    return super.patch(args);
  }

  public async patch(args) {
    if (args.body[this.modelIsDeletedAttribute]) {
      delete args.body[this.modelIsDeletedAttribute];
    }
    return super.patch(args);
  }

  public async post(args) {
    if (args.body instanceof Array) {
      for (const rBody of args.body) {
        rBody[this.modelIsDeletedAttribute] = false;
      }
      return super.post(args);
    } else {
      args.body[this.modelIsDeletedAttribute] = false;
      return super.post(args);
    }
  }
}
