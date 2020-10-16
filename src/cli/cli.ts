#!/usr/bin/env node

import {CLIUtil} from "@miqro/core";
import {main as init} from "./init";
import {main as makeMigrations} from "./makemigrations";
import {main as autoMigrate} from "./automigrate";
import {main as createModel} from "./createmodel";
import {main as migrate} from "./migrate";
import {main as migrationStatus} from "./migration-status";
import {main as seed} from "./seed";
import {main as undoSeed} from "./undo-seed";
import {main as consoleCMD} from "./console";
import {main as dumpData} from "./dump-data";
import {main as pushData} from "./push-data";

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  init: {cb: init, description: "\t\tinit sequelize configuration."},
  console: {cb: consoleCMD, description: "\t\truns a readline interface that send the input as a query"},
  ["dump-data"]: {cb: dumpData, description: "\tdump the data of the database (only defined models)"},
  ["push-data"]: {cb: pushData, description: "\tpush a dump to the database"},
  automigrate: {cb: autoMigrate, description: "\truns makemigrations and migrate together"},
  makemigrations: {
    cb: makeMigrations,
    description: "\tseeks changes in your models and creates migrations"
  },
  ["migration-status"]: {cb: migrationStatus, description: "npx sequelize-cli db:migrate:status"},
  migrate: {cb: migrate, description: "\t\tnpx sequelize-cli db:migrate"},
  seed: {cb: seed, description: "\t\tnpx sequelize-cli db:seed:all"},
  ["undo-seed"]: {cb: undoSeed, description: "\tnpx sequelize-cli db:seed:undo:all"},
  ["create-model"]: {cb: createModel, description: "\tcreates an example model"}
}, "npx @miqro/database <command> [args]", console);
