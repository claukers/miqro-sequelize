"use strict";

import {loadSequelizeRC, Util} from "@miqro/core";

export const setupDB = (): {
  models: any[];
  sequelize: any;
} => {
  const {
    modelsFolder
  } = loadSequelizeRC();
  Util.checkModules([modelsFolder]);
  return require(modelsFolder);
};
