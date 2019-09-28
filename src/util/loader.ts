"use strict";
import * as  fs from "fs";
import { Util } from "miqro-core";
import * as  path from "path";
import {templates} from "./template";

export const setupDB = () => {
  Util.checkEnvVariables(["MIQRO_DIRNAME"]);
  const sequelizercPath = path.resolve(process.env.MIQRO_DIRNAME, ".sequelizerc");
  if (!fs.existsSync(sequelizercPath)) {
    const configFolder = path.resolve(process.env.MIQRO_DIRNAME, "config");
    const dbFolder = path.resolve(process.env.MIQRO_DIRNAME, "db");
    const migrationsFolder = path.resolve(dbFolder, "migrations");
    const modelsFolder = path.resolve(dbFolder, "models");
    const seedersFolder = path.resolve(dbFolder, "seeders");
    const modelLoaderPath = path.resolve(modelsFolder, "index.js");
    const dbConfigFilePath = path.resolve(configFolder, "db.js");
    if (!fs.existsSync(dbFolder)) {
      fs.mkdirSync(dbFolder);
    }
    if (!fs.existsSync(dbConfigFilePath)) {
      fs.writeFileSync(dbConfigFilePath, templates.dbConfig);
    }
    if (!fs.existsSync(sequelizercPath)) {
      fs.writeFileSync(sequelizercPath, templates.sequelizerc);
    }
    if (!fs.existsSync(migrationsFolder)) {
      fs.mkdirSync(migrationsFolder);
    }
    if (!fs.existsSync(modelsFolder)) {
      fs.mkdirSync(modelsFolder);
    }
    if (!fs.existsSync(modelLoaderPath)) {
      fs.writeFileSync(modelLoaderPath, templates.modelsIndex);
    }
    if (!fs.existsSync(seedersFolder)) {
      fs.mkdirSync(seedersFolder);
    }
  }
  const sequelizerc = require(sequelizercPath);
  return require(sequelizerc["models-path"]);
};
