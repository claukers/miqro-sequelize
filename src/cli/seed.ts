import {Util} from "@miqro/core";
import {seed} from "../db";

export const main = (): void => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: miqro-database seed`);
  }

  Util.loadConfig();
  seed();
}
