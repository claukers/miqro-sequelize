import {existsSync, mkdirSync, writeFileSync} from "fs";
import {resolve} from "path";
import {sequelizeDirs} from "../util/loader";
import {templates} from "../util/template";

const logger = console;
const modelname = process.argv[3];

if (process.argv.length !== 4) {
  throw new Error(`usage: miqro-core createmodel <modelname>`);
}

if (typeof modelname !== "string") {
  throw new Error(`<modelname> must be a string!`);
}

const config = sequelizeDirs();
if (!existsSync(config.modelsFolder)) {
  logger.warn(`models folder [${config.modelsFolder}] doesnt exists!`);
  logger.warn(`creating [${config.modelsFolder}]!`);
  mkdirSync(config.modelsFolder);
}
const modelPath = resolve(config.modelsFolder, `${modelname.toLowerCase()}.js`);

if (existsSync(modelPath)) {
  throw new Error(`${modelPath} already exists!`);
}
logger.info(`creating [${modelPath}]!`);
writeFileSync(modelPath, templates.exampleModel(modelname));
