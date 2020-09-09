import {Util} from "@miqro/core";
import {makemigrations} from "../db";

export const main = () => {
  if (process.argv.length !== 3) {
    // noinspection SpellCheckingInspection
    throw new Error(`usage: miqro-database makemigrations`);
  }

// noinspection SpellCheckingInspection
  Util.loadConfig();
  makemigrations();
}
