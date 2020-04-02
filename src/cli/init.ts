import {initDBConfig} from "../db";

const logger = console;

if (process.argv.length !== 3) {
  // noinspection SpellCheckingInspection
  throw new Error(`usage: miqro-database init`);
}

initDBConfig();
