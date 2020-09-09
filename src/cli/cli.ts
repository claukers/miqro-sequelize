#!/usr/bin/env node

import {CLIUtil} from "@miqro/core";
import {resolve} from "path";

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  init: {module: resolve(__dirname, "init"), description: "init sequelize configuration."},
  makemigrations: {
    module: resolve(__dirname, "makemigrations"),
    description: "seeks changes in your models and creates migrations"
  },
  migrate: {module: resolve(__dirname, "migrate"), description: "runs the migrations"},
  automigrate: {module: resolve(__dirname, "automigrate"), description: "runs makemigrations and migrate together"},
  seed: {module: resolve(__dirname, "seed"), description: "seeds your db"},
  ["undo-seed"]: {module: resolve(__dirname, "undo-seed"), description: "undo all seeds from your db"},
  ["migration-status"]: {module: resolve(__dirname, "migration-status"), description: "..."},
  createmodel: {module: resolve(__dirname, "createmodel"), description: "creates an example model"}
}, "miqro-database", console);
