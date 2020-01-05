import {existsSync, mkdirSync, writeFileSync} from "fs";
import {ConfigPathResolver} from "miqro-core";
import {resolve} from "path";
import {templates} from "../util/template";

const logger = console;
const modelname = process.argv[3];

if (process.argv.length !== 4) {
  throw new Error(`usage: miqro-core createmodelservice <modelname>`);
}

if (typeof modelname !== "string") {
  throw new Error(`<modelname> must be a string!`);
}

const serviceDirname = ConfigPathResolver.getServiceDirname();
if (!existsSync(serviceDirname)) {
  logger.warn(`models folder [${serviceDirname}] doesnt exists!`);
  logger.warn(`creating [${serviceDirname}]!`);
  mkdirSync(serviceDirname);
}
const modelPath = resolve(serviceDirname, `${modelname.toLowerCase()}.js`);

if (existsSync(modelPath)) {
  throw new Error(`${modelPath} already exists!`);
}
logger.info(`creating [${modelPath}]!`);
writeFileSync(modelPath, templates.exampleModelService(modelname));
