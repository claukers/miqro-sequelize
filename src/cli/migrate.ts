import {Util} from "@miqro/core";
import {migrate} from "../db";

export const main = () => {
  if (process.argv.length !== 3) {
    throw new Error(`usage: miqro-database migrate`);
  }

  Util.loadConfig();
  migrate();
}
