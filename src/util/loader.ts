"use strict";
import {ConfigFileNotFoundError, ConfigPathResolver, Util} from "@miqro/core";
import {existsSync} from "fs";
import {resolve} from "path";

// noinspection SpellCheckingInspection
export const sequelizeDirs = (): {
  // noinspection SpellCheckingInspection
  sequelizercPath;
  dbConfigFilePath: string;
  migrationsFolder: string;
  seedersFolder: string;
  modelsFolder: string;
} => {
  const logger = Util.getLogger("loader");
  // noinspection SpellCheckingInspection
  const sequelizercPath = resolve(ConfigPathResolver.getBaseDirname(), ".sequelizerc");
  if (!existsSync(sequelizercPath)) {
    // noinspection SpellCheckingInspection
    throw new ConfigFileNotFoundError(`missing .sequelizerc file. maybe you didnt run miqro-database init.`);
  } else {
    logger.info(`loading sequelize config from [${sequelizercPath}]`);
    // noinspection SpellCheckingInspection
    /* eslint-disable  @typescript-eslint/no-var-requires */
    const sequelizerc = require(sequelizercPath);
    // noinspection SpellCheckingInspection
    return {
      sequelizercPath,
      dbConfigFilePath: sequelizerc.config,
      migrationsFolder: sequelizerc["migrations-path"],
      seedersFolder: sequelizerc["seeders-path"],
      modelsFolder: sequelizerc["models-path"]
    };
  }
};

export const setupDB = (): {
  models: any[];
  sequelize: any;
} => {
  const {
    modelsFolder
  } = sequelizeDirs();
  return require(modelsFolder);
};
