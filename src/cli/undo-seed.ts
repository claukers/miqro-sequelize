import {Util} from "@miqro/core";
import {undoSeed} from "../db";

export const main = (): void => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: miqro seed`);
  }

  Util.loadConfig();
  undoSeed();
}
