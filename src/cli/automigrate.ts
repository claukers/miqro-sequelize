import { Util } from "miqro-core";
import {makemigrations, migrate} from "../db";

if (process.argv.length !== 3) {
  throw new Error(`usage: miqro-sequelize automigrate`);
}

Util.loadConfig();
makemigrations();
migrate();
