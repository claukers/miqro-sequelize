export * from "./db/db";

import {Database} from "./db/db";

export const getDB = (): Database => Database.getInstance();
