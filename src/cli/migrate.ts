import { Util } from "miqro-core";
import {migrate} from "../db";

if (process.argv.length !== 3) {
  throw new Error(`usage: miqro-sequelize migrate`);
}

Util.loadConfig();
migrate();
