import {initDBConfig} from "../db";

export const main = () => {
  if (process.argv.length !== 3) {
    // noinspection SpellCheckingInspection
    throw new Error(`usage: miqro-database init`);
  }

  initDBConfig();
}
