import {Util} from "@miqro/core";
import {migrate} from "../db";

export const main = (): void => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: npx miqro db:migrate`);
  }

  Util.loadConfig();
  migrate();
}
