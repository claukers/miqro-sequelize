import {Database} from "./db";

export * from "./db";

export const getDB = (): Database => new Database();
export * from "./model";
export * from "./smodel";
export * from "./amodel";
export * from "./postlist";
export * from "./deleted";
