import {Util} from "@miqro/core";
import {undoSeed} from "../db";

export const main = () => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: miqro-database seed`);
  }

  Util.loadConfig();
  undoSeed();
}
