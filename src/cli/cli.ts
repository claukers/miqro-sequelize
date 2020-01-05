#!/usr/bin/env node

import {CLIUtil} from "miqro-core";
import {resolve} from "path";

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  makemigrations: {module: resolve(__dirname, "makemigrations"), description: "seeks changes in your models and creates migrations"},
  migrate: {module: resolve(__dirname, "migrate"), description: "runs the migrations"},
  automigrate: {module: resolve(__dirname, "automigrate"), description: "runs makemigrations and migrate together"},
  seed: {module: resolve(__dirname, "seed"), description: "seeds your db"},
  createmodel: {module: resolve(__dirname, "createmodel"), description: "creates an example model"},
  createmodelservice: {module: resolve(__dirname, "createmodelservice"), description: "creates an example model service"}
}, "miqro-sequelize", console);
