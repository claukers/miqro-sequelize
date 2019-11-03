import * as fs from "fs";
import { Util } from "miqro-core";
import * as path from "path";
import {seed} from "../db";

const modulePath = process.argv[3];

if (process.argv.length !== 4) {
  throw new Error(`usage: miqro-sequelize seed <microservice.js>`);
}
if (typeof modulePath !== "string") {
  throw new Error(`<microservice.js> must be a string!\nusage: miqro-sequelize seed <microservice.js>`);
}

const service = path.resolve(modulePath);

if (!fs.existsSync(service)) {
  // noinspection SpellCheckingInspection
  throw new Error(`microservice [${service}] doesnt exists!`);
}

Util.setupInstanceEnv("seed", service);
Util.loadConfig();
seed();
