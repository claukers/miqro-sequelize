import {
  PostListModelService
} from "./postlist";

export class DeletedModelService extends PostListModelService {
  public async get(args) {
    args.params.deleted = false;
    return super.get(args);
  }

  public async delete(args) {
    args.body.deleted = true;
    return super.patch(args);
  }

  public async patch(args) {
    if (args.body.deleted) {
      delete args.body.deleted;
    }
    return super.patch(args);
  }

  public async post(args) {
    if (args.body instanceof Array) {
      for (const rBody of args.body) {
        rBody.deleted = false;
      }
      return super.post(args);
    } else {
      args.body.deleted = false;
      return super.post(args);
    }
  }
}
