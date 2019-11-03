import * as child_process from "child_process";
import * as path from "path";
import { sequelizeDirs } from "../util/loader";
import { makemigrationsImpl } from "./automigrations";

const logger = console;

// noinspection SpellCheckingInspection
export const makemigrations = () => {
  try {
    return makemigrationsImpl();
  } catch (e) {
    logger.error(e.message);
  }
};

export const migrate = () => {
  try {
    // noinspection SpellCheckingInspection
    const {
      sequelizercPath
    } = sequelizeDirs();
    logger.log(child_process.execSync(
      "npx sequelize-cli db:migrate",
      {
        cwd: path.dirname(sequelizercPath),
        env: process.env,
        windowsHide: true
      }
    ).toString());
  } catch (e) {
    logger.error(e.message);
  }
};

export const seed = () => {
  try {
    // noinspection SpellCheckingInspection
    const {
      sequelizercPath
    } = sequelizeDirs();
    logger.log(child_process.execSync(
      "npx sequelize-cli db:seed:all",
      {
        cwd: path.dirname(sequelizercPath),
        env: process.env,
        windowsHide: true
      }
    ).toString());
  } catch (e) {
    logger.error(e.message);
  }
};
