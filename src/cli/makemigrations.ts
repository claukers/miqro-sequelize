import {Util} from "@miqro/core";
import {makemigrations} from "../db";

export const main = (): void => {
  if (process.argv.length !== 3) {
    // noinspection SpellCheckingInspection
    throw new Error(`usage: npx miqro db:makemigrations`);
  }

// noinspection SpellCheckingInspection
  Util.loadConfig();
  makemigrations();
}
