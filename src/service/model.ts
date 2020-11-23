import {ParseOption, Session, SimpleMap, SimpleTypes} from "@miqro/core";
import {Model, ModelCtor, WhereOptions} from "sequelize/types";

export interface ModelServiceArgs {
  body: SimpleMap<SimpleTypes>;
  query: SimpleMap<SimpleTypes>;
  params: SimpleMap<SimpleTypes>;
  session?: Session;
}

export type ModelGetResult<T = any, T2 = any> =
  Model<T, T2>[]
  | { rows: Model<T, T2>[]; count: number | { name: string; count: number; }[] };

export type ModelPostResult<T = any, T2 = any> = Model<T, T2> | Model<T, T2>[];

export type ModelPatchResult<T = any, T2 = any> = Model<T, T2> | Model<T, T2>[] | null;

export type ModelDeleteResult = void | void[] | null;

export interface ModelServiceInterface {
  get(options: ModelServiceArgs, transaction?: any, skipLocked?: boolean): Promise<any>;

  post(options: ModelServiceArgs, transaction?: any): Promise<any>;

  put(options: ModelServiceArgs, transaction?: any): Promise<any>;

  patch(options: ModelServiceArgs, transaction?: any): Promise<any>;

  delete(options: ModelServiceArgs, transaction?: any): Promise<any>;
}

export type ModelServiceInclude = {
  model: ModelCtor<any>;
  required?: boolean;
  where?: WhereOptions,
  include?: {
    model: ModelCtor<any>;
    required?: boolean;
    where?: WhereOptions,
    include?: {
      model: ModelCtor<any>;
      required?: boolean;
      where?: WhereOptions,
      include?: {
        model: ModelCtor<any>;
        required?: boolean;
        where?: WhereOptions
      }[]
    }[]
  }[]
}[];

export interface ModelServiceOptions {
  enableMultiInstanceDelete?: boolean;
  enableMultiInstancePatch?: boolean;
  disableAttributesQuery?: boolean;
  include?: ModelServiceInclude;
  disableOrderQuery?: boolean;
  disableGroupQuery?: boolean;
  disablePaginationQuery?: boolean;
}

// ?group=name&group=bla
export const groupParseOption: ParseOption = {
  name: "group", type: "array", arrayType: "string", required: false
};

// ?attribute=id&attribute=sum,amount,total
export const attributesParseOption: ParseOption = {
  name: "attributes", type: "array", required: false
};

// ?limit=10&offset=0&searchColumns=name&searchColumns=age&searchQuery=text
export const paginationParseOption: ParseOption[] = [
  {name: "limit", type: "number", required: false},
  {name: "offset", type: "number", required: false},
  {name: "searchColumns", type: "array", arrayType: "string", arrayMinLength: 1, required: false},
  {name: "searchQuery", type: "string", required: false}
];

// ?order=name,DESC&order=age,ASC
export const orderParseOption: ParseOption = {
  name: "order",
  type: "array",
  arrayMinLength: 1,
  arrayType: "string",
  required: false
};
