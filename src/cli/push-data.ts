import {Util, SimpleMap} from "@miqro/core";
import {resolve} from "path";
import {readFileSync} from "fs";
import {Database} from "../";

export const main = async (): Promise<void> => {
  const outfile = process.argv[3];
  if (process.argv.length !== 4) {
    throw new Error(`arguments: <outfile>`);
  }

  if (typeof outfile !== "string") {
    throw new Error(`<outfile> must be a string!`);
  }


  Util.loadConfig();
  const db = Database.getInstance();
  const out: SimpleMap<any[]> = JSON.parse(readFileSync(resolve(process.cwd(), outfile)).toString());
  const models = Object.keys(db.models);
  for (const modelName of models) {
    if (out[modelName]) {
      await db.models[modelName].bulkCreate(out[modelName]);
    }
  }
}
