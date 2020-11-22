import {ParseOption, Session, SimpleMap, SimpleTypes} from "@miqro/core";
import {Model} from "sequelize/types";

export interface ModelServiceArgs {
  body: SimpleMap<SimpleTypes>;
  query: SimpleMap<SimpleTypes>;
  params: SimpleMap<SimpleTypes>;
  session?: Session;
}

export type ModelGet<T, T2> = Model<T, T2>[] | { rows: Model<T, T2>[]; count: number | {name: string; count: number;}[] };;

export interface ModelServiceInterface {
  get(options: ModelServiceArgs, transaction?: any, skipLocked?: boolean): Promise<any>;

  post(options: ModelServiceArgs, transaction?: any): Promise<any>;

  put(options: ModelServiceArgs, transaction?: any): Promise<any>;

  patch(options: ModelServiceArgs, transaction?: any): Promise<any>;

  delete(options: ModelServiceArgs, transaction?: any): Promise<any>;
}

export type ModelServiceIncludeQuery = { model: string; required?: boolean; where?: any, include?: { model: string; required?: boolean; where?: any }[] }[];

export type ModelServicePaginationQuery = { limit: number; offset: number; search?: { columns: string[], query: string; } };

export type ModelServiceOrderQuery = [string, "DESC" | "ASC"][];

export interface ModelServiceOptions {
  enableMultiInstanceDelete?: boolean;
  enableMultiInstancePatch?: boolean;
  disableAttributeQuery?: boolean;
  disableIncludeQuery?: boolean;
  disableOrderQuery?: boolean;
  disableGroupQuery?: boolean;
  disablePaginationQuery?: boolean;
}

export const groupParseOption: ParseOption = {
  name: "group", type: "array", arrayType: "string", required: false, parseJSON: true
};

export const attributesParseOption: ParseOption = {
  name: "attributes", type: "array", parseJSON: true, required: false
};

export const includeParseOption: ParseOption = {
  name: "include", parseJSON: true, type: "array", arrayType: "nested", required: false, nestedOptions: {
    mode: "no_extra",
    options: [
      {name: "model", type: "string", required: true},
      {name: "required", type: "boolean", required: false},
      {name: "where", type: "object", required: false},
      {
        name: "include", type: "array", arrayType: "nested", required: false, nestedOptions: {
          mode: "no_extra",
          options: [
            {name: "model", type: "string", required: true},
            {name: "required", type: "boolean", required: false},
            {name: "where", type: "object", required: false}
          ]
        }
      }
    ]
  }
};

export const paginationParseOption: ParseOption = {
  name: "pagination", parseJSON: true, type: "nested", required: false, nestedOptions: {
    mode: "no_extra",
    options: [
      {name: "limit", type: "number", required: true},
      {name: "offset", type: "number", required: true},
      {
        name: "search", type: "nested", required: false, nestedOptions: {
          mode: "no_extra",
          options: [
            {name: "columns", type: "array", arrayType: "string", required: true},
            {name: "query", type: "string", required: true}
          ]
        }
      }
    ]
  }
};

export const orderParseOption: ParseOption = {
  name: "order",
  parseJSON: true,
  type: "array",
  arrayType: "array",
  required: false
};
