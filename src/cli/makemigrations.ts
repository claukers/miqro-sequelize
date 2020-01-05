import { Util } from "miqro-core";
import {makemigrations} from "../db";

if (process.argv.length !== 3) {
  // noinspection SpellCheckingInspection
  throw new Error(`usage: miqro-sequelize makemigrations`);
}

// noinspection SpellCheckingInspection
Util.loadConfig();
makemigrations();
