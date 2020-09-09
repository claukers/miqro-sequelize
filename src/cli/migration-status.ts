import {Util} from "@miqro/core";
import {migrateStatus, undoSeed} from "../db";

if (process.argv.length !== 3) {
  throw new Error(`usage: miqro-database seed`);
}

Util.loadConfig();
migrateStatus();
