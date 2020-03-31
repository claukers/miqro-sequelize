[@miqro/database](../README.md) › [Globals](../globals.md) › ["cli/createmodelservice"](_cli_createmodelservice_.md)

# Module: "cli/createmodelservice"

## Index

### Variables

* [logger](_cli_createmodelservice_.md#const-logger)
* [modelPath](_cli_createmodelservice_.md#const-modelpath)
* [modelname](_cli_createmodelservice_.md#const-modelname)
* [serviceDirname](_cli_createmodelservice_.md#const-servicedirname)

## Variables

### `Const` logger

• **logger**: *Console* = console

*Defined in [src/cli/createmodelservice.ts:6](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/cli/createmodelservice.ts#L6)*

___

### `Const` modelPath

• **modelPath**: *string* = resolve(serviceDirname, `${modelname.toLowerCase()}.js`)

*Defined in [src/cli/createmodelservice.ts:24](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/cli/createmodelservice.ts#L24)*

___

### `Const` modelname

• **modelname**: *string* = process.argv[3]

*Defined in [src/cli/createmodelservice.ts:7](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/cli/createmodelservice.ts#L7)*

___

### `Const` serviceDirname

• **serviceDirname**: *string* = ConfigPathResolver.getServiceDirname()

*Defined in [src/cli/createmodelservice.ts:16](https://github.com/claukers/miqro-sequelize/blob/aaa7286/src/cli/createmodelservice.ts#L16)*
