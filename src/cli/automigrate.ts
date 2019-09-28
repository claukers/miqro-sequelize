import * as fs from "fs";
import { Util } from "miqro-core";
import * as path from "path";
import {makemigrations, migrate} from "../db/migrations";

const modulePath = process.argv[3];

if (process.argv.length !== 4) {
  throw new Error(`usage: miqro automigrate <microservice.js>`);
}
if (typeof modulePath !== "string") {
  throw new Error(`<microservice.js> must be a string!\nusage: miqro automigrate <microservice.js>`);
}

const service = path.resolve(modulePath);

if (!fs.existsSync(service)) {
  throw new Error(`microservice [${service}] doesnt exists!`);
}

Util.setupInstanceEnv("automigrate", service);
Util.loadConfig();
makemigrations();
migrate();
