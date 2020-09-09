import {Util} from "@miqro/core";
import {makemigrations, migrate} from "../db";

export const main = () => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: miqro-database automigrate`);
  }

  Util.loadConfig();
  makemigrations();
  migrate();
}
