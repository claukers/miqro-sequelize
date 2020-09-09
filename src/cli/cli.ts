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

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  init: {cb: init, description: "init sequelize configuration."},
  makemigrations: {
    cb: makeMigrations,
    description: "seeks changes in your models and creates migrations"
  },
  migrate: {cb: migrate, description: "runs the migrations"},
  automigrate: {cb: autoMigrate, description: "runs makemigrations and migrate together"},
  seed: {cb: seed, description: "seeds your db"},
  ["undo-seed"]: {cb: undoSeed, description: "undo all seeds from your db"},
  ["migration-status"]: {cb: migrationStatus, description: "..."},
  createmodel: {cb: createModel, description: "creates an example model"}
}, "miqro-database", console);
