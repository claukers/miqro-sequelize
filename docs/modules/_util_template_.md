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

*Defined in [src/util/template.ts:43](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L43)*

___

### `Const` modelsIndex

• **modelsIndex**: *"'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const sequelizerc = require(path.resolve(__dirname, '..', '..', '.sequelizerc'));
const config = require(sequelizerc.config);
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

"* = `'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const sequelizerc = require(path.resolve(__dirname, '..', '..', '.sequelizerc'));
const config = require(sequelizerc.config);
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

`

*Defined in [src/util/template.ts:2](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L2)*

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

*Defined in [src/util/template.ts:71](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L71)*

## Functions

### `Const` exampleModel

▸ **exampleModel**(`modelName`: string): *string*

*Defined in [src/util/template.ts:82](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`modelName` | string |

**Returns:** *string*

___

### `Const` exampleModelService

▸ **exampleModelService**(`serviceName`: string): *string*

*Defined in [src/util/template.ts:97](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceName` | string |

**Returns:** *string*

## Object literals

### `Const` templates

### ▪ **templates**: *object*

*Defined in [src/util/template.ts:118](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L118)*

###  dbConfig

• **dbConfig**: *string*

*Defined in [src/util/template.ts:120](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L120)*

###  exampleModel

• **exampleModel**: *[exampleModel](_util_template_.md#const-examplemodel)*

*Defined in [src/util/template.ts:122](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L122)*

###  exampleModelService

• **exampleModelService**: *[exampleModelService](_util_template_.md#const-examplemodelservice)*

*Defined in [src/util/template.ts:123](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L123)*

###  modelsIndex

• **modelsIndex**: *string*

*Defined in [src/util/template.ts:119](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L119)*

###  sequelizerc

• **sequelizerc**: *string*

*Defined in [src/util/template.ts:121](https://github.com/claukers/miqro-sequelize/blob/846f667/src/util/template.ts#L121)*
