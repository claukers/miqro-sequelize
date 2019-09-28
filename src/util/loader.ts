"use strict";
import { Util } from "miqro-core";
import * as  path from "path";

export const setupDB = () => {
  Util.checkEnvVariables(["MIQRO_DIRNAME"]);
  const sequelizerc = require(path.resolve(process.env.MIQRO_DIRNAME, ".sequelizerc"));
  return require(sequelizerc["models-path"]);
};
