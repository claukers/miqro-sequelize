import * as fs from "fs";
import { Util } from "miqro-core";
import * as path from "path";
import {makemigrations} from "../db";

const modulePath = process.argv[3];

if (process.argv.length !== 4) {
  // noinspection SpellCheckingInspection
  throw new Error(`usage: miqro-sequelize makemigrations <microservice.js>`);
}
if (typeof modulePath !== "string") {
  // noinspection SpellCheckingInspection
  throw new Error(`<microservice.js> must be a string!\nusage: miqro-sequelize makemigrations <microservice.js>`);
}

const service = path.resolve(modulePath);

if (!fs.existsSync(service)) {
  // noinspection SpellCheckingInspection
  throw new Error(`microservice [${service}] doesnt exists!`);
}

// noinspection SpellCheckingInspection
Util.setupInstanceEnv("makemigrations", service);
Util.loadConfig();
makemigrations();
