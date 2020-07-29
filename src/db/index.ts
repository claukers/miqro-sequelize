import * as childProcess from "child_process";
import {makemigrationsImpl} from "./automigrations";
import {existsSync, mkdirSync, writeFileSync} from "fs";
import {dirname, resolve} from "path";
import {templates} from "../util/template";
import {ConfigPathResolver} from "@miqro/core";

const logger = console;

// noinspection SpellCheckingInspection
export const initDBConfig = (): boolean => {
  try {
    const initDir = (p: string): void => {
      if (!existsSync(p)) {
        logger.warn(`creating ${p}`);
        mkdirSync(p);
      } else {
        logger.warn(`${p} already exists!. init will not create it.`);
      }
    };

    const initFile = (p: string, template: string): void => {
      if (!existsSync(p)) {
        logger.warn(`creating ${p} file`);
        writeFileSync(p, template);
      } else {
        logger.warn(`${p} already exists!. init will not create it.`);
      }
    };

    // noinspection SpellCheckingInspection
    const sequelizercPath = resolve(ConfigPathResolver.getBaseDirname(), ".sequelizerc");
    if (existsSync(sequelizercPath)) {
      logger.warn(`.sequelizerc already exists!. init will do nothing.`);
    } else {
      const dbFolder = resolve(ConfigPathResolver.getBaseDirname(), "db");
      const migrationsFolder = resolve(dbFolder, "migrations");
      const modelsFolder = resolve(dbFolder, "models");
      const seedersFolder = resolve(dbFolder, "seeders");
      const modelLoaderPath = resolve(modelsFolder, "index.js");
      const dbConfigFilePath = resolve(dbFolder, "connection.js");
      // noinspection SpellCheckingInspection
      initFile(sequelizercPath, templates.sequelizerc);
      initDir(dbFolder);
      initFile(dbConfigFilePath, templates.dbConfig);
      initDir(migrationsFolder);
      initDir(modelsFolder);
      initFile(modelLoaderPath, templates.modelsIndex);
      initDir(seedersFolder);
    }
    return true;
  } catch (e) {
    logger.error(e.message);
    throw e;
  }
};

// noinspection SpellCheckingInspection
export const makemigrations = (): void => {
  try {
    makemigrationsImpl();
  } catch (e) {
    logger.error(e.message);
    throw e;
  }
};

export const migrate = async (): Promise<void> => {
  try {
    // noinspection SpellCheckingInspection
    logger.log(childProcess.execSync(
      "npx sequelize-cli db:migrate",
      {
        cwd: dirname(ConfigPathResolver.getSequelizeRCFilePath()),
        env: process.env,
        windowsHide: true
      }
    ).toString());
  } catch (e) {
    logger.error(e.message);
    throw e;
  }
};

export const seed = (): void => {
  try {
    // noinspection SpellCheckingInspection
    logger.log(childProcess.execSync(
      "npx sequelize-cli db:seed:all",
      {
        cwd: dirname(ConfigPathResolver.getSequelizeRCFilePath()),
        env: process.env,
        windowsHide: true
      }
    ).toString());
  } catch (e) {
    logger.error(e.message);
    throw e;
  }
};
