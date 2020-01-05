"use strict";
import * as  fs from "fs";
import {ConfigPathResolver, Util} from "miqro-core";
import * as  path from "path";
import {templates} from "./template";

// noinspection SpellCheckingInspection
export const sequelizeDirs = (): {
  // noinspection SpellCheckingInspection
  sequelizercPath,
  dbConfigFilePath: string;
  migrationsFolder: string;
  seedersFolder: string;
  modelsFolder: string;
} => {
  const logger = Util.getLogger("loader");
  // noinspection SpellCheckingInspection
  const sequelizercPath = path.resolve(ConfigPathResolver.getBaseDirname(), ".sequelizerc");
  const dbFolder = path.resolve(ConfigPathResolver.getBaseDirname(), "db");
  const migrationsFolder = path.resolve(dbFolder, "migrations");
  const modelsFolder = path.resolve(dbFolder, "models");
  const seedersFolder = path.resolve(dbFolder, "seeders");
  const modelLoaderPath = path.resolve(modelsFolder, "index.js");
  const dbConfigFilePath = path.resolve(dbFolder, "connection.js");
  if (!fs.existsSync(sequelizercPath)) {
    // noinspection SpellCheckingInspection
    logger.warn(`missing .sequelizerc file trying to recreate sequelize config.`);
    if (!fs.existsSync(sequelizercPath)) {
      logger.warn(`writing [${sequelizercPath}]`);
      fs.writeFileSync(sequelizercPath, templates.sequelizerc);
    }
    if (!fs.existsSync(dbFolder)) {
      logger.warn(`creating folder [${dbFolder}]`);
      fs.mkdirSync(dbFolder);
    }
    if (!fs.existsSync(dbConfigFilePath)) {
      logger.warn(`writing [${dbConfigFilePath}]`);
      fs.writeFileSync(dbConfigFilePath, templates.dbConfig);
    }
    if (!fs.existsSync(migrationsFolder)) {
      logger.warn(`creating folder [${migrationsFolder}]`);
      fs.mkdirSync(migrationsFolder);
    }
    if (!fs.existsSync(modelsFolder)) {
      logger.warn(`creating folder [${modelsFolder}]`);
      fs.mkdirSync(modelsFolder);
    }
    if (!fs.existsSync(modelLoaderPath)) {
      logger.warn(`writing [${dbConfigFilePath}]`);
      fs.writeFileSync(modelLoaderPath, templates.modelsIndex);
    }
    if (!fs.existsSync(seedersFolder)) {
      logger.warn(`creating folder [${seedersFolder}]`);
      fs.mkdirSync(seedersFolder);
    }
    // noinspection SpellCheckingInspection
    return {
      sequelizercPath,
      dbConfigFilePath,
      migrationsFolder,
      seedersFolder,
      modelsFolder
    };
  } else {
    logger.info(`loading sequelize config from [${sequelizercPath}]`);
    // noinspection SpellCheckingInspection
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

export const setupDB = () => {
  const {
    modelsFolder
  } = sequelizeDirs();
  return require(modelsFolder);
};
