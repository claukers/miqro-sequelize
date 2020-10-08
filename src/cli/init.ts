import {initDBConfig} from "../db";

export const main = (): void => {
  if (process.argv.length !== 3) {
    // noinspection SpellCheckingInspection
    throw new Error(`usage: npx miqro db:init`);
  }

  initDBConfig();
}
