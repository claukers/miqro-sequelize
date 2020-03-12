import {IServiceArgs, MethodNotImplementedError} from "@miqro/core";
import {IModelService} from "./model";

export abstract class AbstractModelService implements IModelService {
  // noinspection JSUnusedLocalSymbols
  public async get(options: IServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async post(options: IServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async put(options: IServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async patch(options: IServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async delete(options: IServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }
}
