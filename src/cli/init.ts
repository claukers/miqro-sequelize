import {initDBConfig} from "../db";

if (process.argv.length !== 3) {
  // noinspection SpellCheckingInspection
  throw new Error(`usage: miqro-database init`);
}

initDBConfig();
