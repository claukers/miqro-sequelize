[@miqro/database](../README.md) › [Globals](../globals.md) › ["db/automigrations/migrate"](_db_automigrations_migrate_.md)

# Module: "db/automigrations/migrate"

## Index

### Functions

* [executeMigration](_db_automigrations_migrate_.md#const-executemigration)
* [getMigration](_db_automigrations_migrate_.md#const-getmigration)
* [parseDifference](_db_automigrations_migrate_.md#const-parsedifference)
* [parseIndex](_db_automigrations_migrate_.md#const-parseindex)
* [reverseModels](_db_automigrations_migrate_.md#const-reversemodels)
* [reverseSequelizeColType](_db_automigrations_migrate_.md#const-reversesequelizecoltype)
* [reverseSequelizeDefValueType](_db_automigrations_migrate_.md#const-reversesequelizedefvaluetype)
* [sortActions](_db_automigrations_migrate_.md#const-sortactions)
* [writeMigration](_db_automigrations_migrate_.md#const-writemigration)

## Functions

### `Const` executeMigration

▸ **executeMigration**(`queryInterface`: any, `filename`: any, `pos`: any, `cb`: any, `logger`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:830](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L830)*

**Parameters:**

Name | Type |
------ | ------ |
`queryInterface` | any |
`filename` | any |
`pos` | any |
`cb` | any |
`logger` | any |

**Returns:** *any*

___

### `Const` getMigration

▸ **getMigration**(`actions`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:628](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L628)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | any |

**Returns:** *any*

___

### `Const` parseDifference

▸ **parseDifference**(`previousState`: any, `currentState`: any, `logger`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:316](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L316)*

**Parameters:**

Name | Type |
------ | ------ |
`previousState` | any |
`currentState` | any |
`logger` | any |

**Returns:** *any*

___

### `Const` parseIndex

▸ **parseIndex**(`idx`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:149](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | any |

**Returns:** *any*

___

### `Const` reverseModels

▸ **reverseModels**(`sequelize`: any, `models`: any, `logger`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:183](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`sequelize` | any |
`models` | any |
`logger` | any |

**Returns:** *any*

___

### `Const` reverseSequelizeColType

▸ **reverseSequelizeColType**(`col`: any, `prefix`: string): *string*

*Defined in [src/db/automigrations/migrate.ts:13](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`col` | any | - |
`prefix` | string | "Sequelize." |

**Returns:** *string*

___

### `Const` reverseSequelizeDefValueType

▸ **reverseSequelizeDefValueType**(`defaultValue`: any, `prefix`: string): *any*

*Defined in [src/db/automigrations/migrate.ts:135](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L135)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`defaultValue` | any | - |
`prefix` | string | "Sequelize." |

**Returns:** *any*

___

### `Const` sortActions

▸ **sortActions**(`actions`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:560](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L560)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | any |

**Returns:** *any*

___

### `Const` writeMigration

▸ **writeMigration**(`revision`: any, `migration`: any, `migrationsDir`: any, `name`: string, `comment`: string): *any*

*Defined in [src/db/automigrations/migrate.ts:771](https://github.com/claukers/miqro-sequelize/blob/3348ef6/src/db/automigrations/migrate.ts#L771)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`revision` | any | - |
`migration` | any | - |
`migrationsDir` | any | - |
`name` | string | "" |
`comment` | string | "" |

**Returns:** *any*
