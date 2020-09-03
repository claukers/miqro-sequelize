import {EventEmitter} from "events";
import {Model, ModelCtor} from "sequelize";
import {ConfigPathResolver, SimpleMap, Util} from "@miqro/core";
import {loadSequelizeRC} from "../util/loader";

// noinspection SpellCheckingInspection
export type DataBaseState = "stopped" | "starting" | "started" | "startstop" | "error";

export class Database extends EventEmitter {

  private static instance: Database;

  public static getInstance(): Database {
    if (!Database.instance) Database.instance = new Database();
    return Database.instance;
  }

  // noinspection SpellCheckingInspection
  public static events: DataBaseState[] = ["stopped", "starting", "started", "startstop", "error"];
  public readonly models: SimpleMap<ModelCtor<Model<any, any>>> = {};
  public readonly sequelize: any;
  private state: DataBaseState = "stopped";

  constructor(sequelizercPath = ConfigPathResolver.getSequelizeRCFilePath(), private logger = Util.getLogger("Database")) {
    super();
    const paths = loadSequelizeRC(sequelizercPath);
    Util.checkModules([paths.modelsFolder]);
    /* eslint-disable  @typescript-eslint/no-var-requires */
    const models = require(paths.modelsFolder);
    this.sequelize = models.sequelize;
    /* eslint-disable  @typescript-eslint/no-var-requires */
    (this.sequelize as any).log = (text: string): void => {
      this.logger.debug(text);
    };
    Object.keys(models).forEach((modelName) => {
      if (modelName !== "sequelize" && modelName !== "Sequelize") {
        this.models[modelName] = models[modelName];
      }
    });
  }

  public async transaction(transactionCB: (t: any) => PromiseLike<any>): Promise<any> {
    await this.sequelize.transaction((t: any) => {
      return transactionCB(t);
    });
  }

  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  public async query(q: { query: string; values: any[] }, t?: any): Promise<any> {
    if (t) {
      return this.sequelize.query(q, {transaction: t});
    } else {
      return this.sequelize.query(q);
    }
  }

  public async start(): Promise<void> {
    if (this.state !== "stopped") {
      throw new Error("DataBase not stopped!");
    }
    this.stateChange("starting");
    return new Promise<void>((resolve, reject) => {
      this.sequelize
        .authenticate()
        .then(async () => {
          this.stateChange("started");
          resolve();
        }).catch((e: Error) => {
        this.stateChange("error", e);
        reject();
      });
    });
  }

  public async stop(): Promise<void> {
    if (this.state !== "started") {
      const err = new Error("DataBase not started!");
      this.emit("error", err);
      throw err;
    }
    try {
      // noinspection SpellCheckingInspection
      this.stateChange("startstop");
      await this.sequelize.close();
      this.stateChange("stopped");
    } catch (e) {
      this.stateChange("error", e);
      throw e;
    }
  }

  private stateChange(state: DataBaseState, args?: any): void {
    if (Database.events.indexOf(state) !== -1) {
      this.state = state;
      this.emit(this.state, args);
    } else {
      throw new Error("Unknown state");
    }
  }
}
