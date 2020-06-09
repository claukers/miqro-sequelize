[@miqro/database](../README.md) › [Globals](../globals.md) › ["util/template"](_util_template_.md)

# Module: "util/template"

## Index

### Variables

* [dbConfig](_util_template_.md#const-dbconfig)
* [modelsIndex](_util_template_.md#const-modelsindex)
* [sequelizerc](_util_template_.md#const-sequelizerc)

### Functions

* [exampleModel](_util_template_.md#const-examplemodel)
* [exampleModelService](_util_template_.md#const-examplemodelservice)

### Object literals

* [templates](_util_template_.md#const-templates)

## Variables

### `Const` dbConfig

• **dbConfig**: *string* = `["DB_DIALECT_SSL", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASS", "DB_HOST", ` +
  `"DB_DIALECT", "DB_POOL_MAX", "DB_POOL_MIN", "DB_POOL_ACQUIRE", "DB_POOL_IDDLE", "DB_STORAGE"].forEach((envName) => {
if (process.env[envName] === undefined) {
  throw new Error(\`Env variable [\${envName}!] not defined\`);
}
});

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: process.env.DB_DIALECT_SSL === "true"
  },
  pool: {
    acquire: parseInt(process.env.DB_POOL_ACQUIRE, 10),
    idle: parseInt(process.env.DB_POOL_IDDLE, 10),
    max: parseInt(process.env.DB_POOL_MAX, 10),
    min: parseInt(process.env.DB_POOL_MIN, 10)
  },
  storage: process.env.DB_STORAGE
};
`

*Defined in [src/util/template.ts:37](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L37)*

___

### `Const` modelsIndex

• **modelsIndex**: *"'use strict';

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelizerc = require(path.resolve(__dirname, '..', '..', '.sequelizerc'));
const config = require(sequelizerc.config);

const modelsPath = __dirname;

const db = {
  sequelize: new Sequelize(config.database, config.username, config.password, config),
  Sequelize
};

fs
  .readdirSync(modelsPath)
  .filter((file) => {
    return (file !== "index.js") && (file.indexOf(".") !== 0) && (file.slice(-3) === ".js");
  })
  .forEach((file) => {
    const model = db.sequelize.import(path.join(modelsPath, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;
"* = `'use strict';

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelizerc = require(path.resolve(__dirname, '..', '..', '.sequelizerc'));
const config = require(sequelizerc.config);

const modelsPath = __dirname;

const db = {
  sequelize: new Sequelize(config.database, config.username, config.password, config),
  Sequelize
};

fs
  .readdirSync(modelsPath)
  .filter((file) => {
    return (file !== "index.js") && (file.indexOf(".") !== 0) && (file.slice(-3) === ".js");
  })
  .forEach((file) => {
    const model = db.sequelize.import(path.join(modelsPath, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;
`

*Defined in [src/util/template.ts:2](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L2)*

___

### `Const` sequelizerc

• **sequelizerc**: *"const path = require("path");

module.exports = {
  "config": path.resolve(__dirname, "db", "connection.js"),
  "migrations-path": path.resolve(__dirname, "db", "migrations"),
  "seeders-path": path.resolve(__dirname, "db", "seeders"),
  "models-path": path.resolve(__dirname, "db", "models"),
};
"* = `const path = require("path");

module.exports = {
  "config": path.resolve(__dirname, "db", "connection.js"),
  "migrations-path": path.resolve(__dirname, "db", "migrations"),
  "seeders-path": path.resolve(__dirname, "db", "seeders"),
  "models-path": path.resolve(__dirname, "db", "models"),
};
`

*Defined in [src/util/template.ts:65](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L65)*

## Functions

### `Const` exampleModel

▸ **exampleModel**(`modelName`: string): *string*

*Defined in [src/util/template.ts:76](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`modelName` | string |

**Returns:** *string*

___

### `Const` exampleModelService

▸ **exampleModelService**(`serviceName`: string): *string*

*Defined in [src/util/template.ts:91](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceName` | string |

**Returns:** *string*

## Object literals

### `Const` templates

### ▪ **templates**: *object*

*Defined in [src/util/template.ts:112](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L112)*

###  dbConfig

• **dbConfig**: *string*

*Defined in [src/util/template.ts:114](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L114)*

###  exampleModel

• **exampleModel**: *[exampleModel](_util_template_.md#const-examplemodel)*

*Defined in [src/util/template.ts:116](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L116)*

###  exampleModelService

• **exampleModelService**: *[exampleModelService](_util_template_.md#const-examplemodelservice)*

*Defined in [src/util/template.ts:117](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L117)*

###  modelsIndex

• **modelsIndex**: *string*

*Defined in [src/util/template.ts:113](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L113)*

###  sequelizerc

• **sequelizerc**: *string*

*Defined in [src/util/template.ts:115](https://github.com/claukers/miqro-sequelize/blob/624a208/src/util/template.ts#L115)*
