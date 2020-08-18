import-schema
=============

Import versioned MySQL schema

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/import-schema.svg)](https://npmjs.org/package/import-schema)
[![Downloads/week](https://img.shields.io/npm/dw/import-schema.svg)](https://npmjs.org/package/import-schema)
[![License](https://img.shields.io/npm/l/import-schema.svg)](https://github.com/oshtrak/import-schema/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g import-schema
$ import-schema COMMAND
running command...
$ import-schema (-v|--version|version)
import-schema/0.0.2 darwin-x64 node-v14.4.0
$ import-schema --help [COMMAND]
USAGE
  $ import-schema COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`import-schema generate [LOCATION]`](#import-schema-generate-location)
* [`import-schema get-version`](#import-schema-get-version)
* [`import-schema help [COMMAND]`](#import-schema-help-command)
* [`import-schema install [LOCATION]`](#import-schema-install-location)
* [`import-schema update [LOCATION]`](#import-schema-update-location)

## `import-schema generate [LOCATION]`

Create schema directory

```
USAGE
  $ import-schema generate [LOCATION]

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/generate.js](https://github.com/KierenBP/import-schema/blob/v0.0.2/src/commands/generate.js)_

## `import-schema get-version`

Get Current Version From Database

```
USAGE
  $ import-schema get-version

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/get-version.js](https://github.com/KierenBP/import-schema/blob/v0.0.2/src/commands/get-version.js)_

## `import-schema help [COMMAND]`

display help for import-schema

```
USAGE
  $ import-schema help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `import-schema install [LOCATION]`

Fresh import of entire schema

```
USAGE
  $ import-schema install [LOCATION]

OPTIONS
  -v, --version=version

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/install.js](https://github.com/KierenBP/import-schema/blob/v0.0.2/src/commands/install.js)_

## `import-schema update [LOCATION]`

Update schema to passed version

```
USAGE
  $ import-schema update [LOCATION]

OPTIONS
  -v, --version=version

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/update.js](https://github.com/KierenBP/import-schema/blob/v0.0.2/src/commands/update.js)_
<!-- commandsstop -->
