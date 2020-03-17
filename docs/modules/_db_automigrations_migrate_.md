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

*Defined in [src/db/automigrations/migrate.ts:832](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L832)*

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

▸ **getMigration**(`actions`: any): *object*

*Defined in [src/db/automigrations/migrate.ts:630](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L630)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | any |

**Returns:** *object*

* **commandsUp**: *any[]*

* **consoleOut**: *any[]*

___

### `Const` parseDifference

▸ **parseDifference**(`previousState`: any, `currentState`: any, `logger`: any): *any[]*

*Defined in [src/db/automigrations/migrate.ts:318](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`previousState` | any |
`currentState` | any |
`logger` | any |

**Returns:** *any[]*

___

### `Const` parseIndex

▸ **parseIndex**(`idx`: any): *any*

*Defined in [src/db/automigrations/migrate.ts:152](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | any |

**Returns:** *any*

___

### `Const` reverseModels

▸ **reverseModels**(`sequelize`: any, `models`: any, `logger`: any): *object*

*Defined in [src/db/automigrations/migrate.ts:185](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`sequelize` | any |
`models` | any |
`logger` | any |

**Returns:** *object*

___

### `Const` reverseSequelizeColType

▸ **reverseSequelizeColType**(`col`: any, `prefix`: string): *string*

*Defined in [src/db/automigrations/migrate.ts:13](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`col` | any | - |
`prefix` | string | "Sequelize." |

**Returns:** *string*

___

### `Const` reverseSequelizeDefValueType

▸ **reverseSequelizeDefValueType**(`defaultValue`: any, `prefix`: string): *object | object | object*

*Defined in [src/db/automigrations/migrate.ts:138](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L138)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`defaultValue` | any | - |
`prefix` | string | "Sequelize." |

**Returns:** *object | object | object*

___

### `Const` sortActions

▸ **sortActions**(`actions`: any): *void*

*Defined in [src/db/automigrations/migrate.ts:562](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L562)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | any |

**Returns:** *void*

___

### `Const` writeMigration

▸ **writeMigration**(`revision`: any, `migration`: any, `migrationsDir`: any, `name`: string, `comment`: string): *object*

*Defined in [src/db/automigrations/migrate.ts:773](https://github.com/claukers/miqro-sequelize/blob/6cf2691/src/db/automigrations/migrate.ts#L773)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`revision` | any | - |
`migration` | any | - |
`migrationsDir` | any | - |
`name` | string | "" |
`comment` | string | "" |

**Returns:** *object*

* **filename**: *string*

* **info**(): *object*

  * **comment**: *string*

  * **created**: *Date* = new Date()

  * **name**: *string*

  * **revision**: *any*
