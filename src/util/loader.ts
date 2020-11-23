import {ConfigPathResolver, ConfigFileNotFoundError, getLogger} from "@miqro/core";
import {existsSync} from "fs";

export const loadSequelizeRC = (sequelizercPath: string = ConfigPathResolver.getSequelizeRCFilePath()): {
  // noinspection SpellCheckingInspection
  sequelizercPath: string;
  dbConfigFilePath: string;
  migrationsFolder: string;
  seedersFolder: string;
  modelsFolder: string;
} => {
  const logger = getLogger("Database");
  // noinspection SpellCheckingInspection
  if (!existsSync(sequelizercPath)) {
    // noinspection SpellCheckingInspection
    throw new ConfigFileNotFoundError(`missing .sequelizerc file. maybe you didnt init your db config.`);
  } else {
    logger.debug(`loading sequelize config from [${sequelizercPath}]`);
    // noinspection SpellCheckingInspection
    /* eslint-disable  @typescript-eslint/no-var-requires */
    const sequelizerc = require(sequelizercPath);
    const modelsFolder = sequelizerc["models-path"];
    if (!existsSync(modelsFolder)) {
      throw new ConfigFileNotFoundError(`missing .sequelizerc["models-path"]=[${modelsFolder}] file. maybe you didnt init your db config.`);
    }
    return {
      sequelizercPath,
      dbConfigFilePath: sequelizerc.config,
      migrationsFolder: sequelizerc["migrations-path"],
      seedersFolder: sequelizerc["seeders-path"],
      modelsFolder
    };
  }
};
