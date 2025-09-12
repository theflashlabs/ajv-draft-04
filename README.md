# @theflashlabs/ajv-draft-04

Ajv with JSON Schema draft-04 support

[![build](https://github.com/theflashlabs/ajv-draft-04/actions/workflows/build.yml/badge.svg)](https://github.com/theflashlabs/ajv-draft-04/actions/workflows/build.yml)
[![npm](https://img.shields.io/npm/v/@theflashlabs/ajv-draft-04.svg)](https://www.npmjs.com/package/@theflashlabs/ajv-draft-04)
[![coverage](https://coveralls.io/repos/github/theflashlabs/ajv-draft-04/badge.svg?branch=main)](https://coveralls.io/github/theflashlabs/ajv-draft-04?branch=main)
[![GitHub Sponsors](https://img.shields.io/badge/$-sponsors-brightgreen)](https://github.com/sponsors/bavulapati)

## Usage

You need to install both ajv and this package (to allow upgrading ajv without upgrading this package):

```shell
npm i @theflashlabs/ajv @theflashlabs/ajv-draft-04
```

```javascript
// ESM/TypeScript import
import Ajv from "@theflashlabs/ajv-draft-04"
// Node.js require:
const Ajv = require("@theflashlabs/ajv-draft-04")

const ajv = new Ajv()
```

See [ajv site](https://ajv.js.org) for documentation.

## Tests

```bash
npm install
git submodule update --init
npm test
```

## License

[MIT](https://github.com/ajv-validator/ajv-formats/blob/master/LICENSE)
