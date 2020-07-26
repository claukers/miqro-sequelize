import {ModelServiceArgs, ModelServiceInterface} from "./model";
import {MethodNotImplementedError} from "@miqro/core";

export abstract class AbstractModelService implements ModelServiceInterface {
  // noinspection JSUnusedLocalSymbols
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  public async get(options: ModelServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async post(options: ModelServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async put(options: ModelServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async patch(options: ModelServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }

  // noinspection JSUnusedLocalSymbols
  public async delete(options: ModelServiceArgs): Promise<any> {
    throw new MethodNotImplementedError("Method not implemented.");
  }
}
