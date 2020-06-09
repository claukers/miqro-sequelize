[@miqro/database](../README.md) › [Globals](../globals.md) › ["cli/createmodel"](_cli_createmodel_.md)

# Module: "cli/createmodel"

## Index

### Variables

* [config](_cli_createmodel_.md#const-config)
* [logger](_cli_createmodel_.md#const-logger)
* [modelPath](_cli_createmodel_.md#const-modelpath)
* [modelname](_cli_createmodel_.md#const-modelname)

## Variables

### `Const` config

• **config**: *object* = sequelizeDirs()

*Defined in [src/cli/createmodel.ts:17](https://github.com/claukers/miqro-sequelize/blob/624a208/src/cli/createmodel.ts#L17)*

#### Type declaration:

* **dbConfigFilePath**: *string*

* **migrationsFolder**: *string*

* **modelsFolder**: *string*

* **seedersFolder**: *string*

* **sequelizercPath**: *any*

___

### `Const` logger

• **logger**: *Console* = console

*Defined in [src/cli/createmodel.ts:6](https://github.com/claukers/miqro-sequelize/blob/624a208/src/cli/createmodel.ts#L6)*

___

### `Const` modelPath

• **modelPath**: *string* = resolve(config.modelsFolder, `${modelname.toLowerCase()}.js`)

*Defined in [src/cli/createmodel.ts:25](https://github.com/claukers/miqro-sequelize/blob/624a208/src/cli/createmodel.ts#L25)*

___

### `Const` modelname

• **modelname**: *string* = process.argv[3]

*Defined in [src/cli/createmodel.ts:7](https://github.com/claukers/miqro-sequelize/blob/624a208/src/cli/createmodel.ts#L7)*
