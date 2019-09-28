import * as fs from "fs";
import * as path from "path";
import { Util } from "miqro-core";

const modulePath = process.argv[3];

if (process.argv.length !== 4) {
  throw new Error(`usage: miqro makemigrations <microservice.js>`);
}
if (typeof modulePath !== "string") {
  throw new Error(`<microservice.js> must be a string!\nusage: miqro makemigrations <microservice.js>`);
}

const service = path.resolve(modulePath);

if (!fs.existsSync(service)) {
  throw new Error(`microservice [${service}] doesnt exists!`);
}

Util.setupInstanceEnv("makemigrations", service);
Util.loadConfig();
//lib.makemigrations();
