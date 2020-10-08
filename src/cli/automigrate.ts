import {Util} from "@miqro/core";
import {makemigrations, migrate} from "../db";

export const main = (): void => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: npx miqro db:automigrate`);
  }

  Util.loadConfig();
  makemigrations();
  migrate();
}
