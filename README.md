# Figma plugin types [DEPRECATED]
[![npm](https://img.shields.io/npm/v/@figma-plugin/types?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/@figma-plugin/types)

## ⚠️⚠️⚠️
Scince **May 8, 2020** official package is available here [@figma/plugin-typings](https://www.npmjs.com/package/@figma/plugin-typings). This package no longer needed and should be replaced with official one.

This repository automatically making releases of [official Figma plugin Typescript definitions](https://www.figma.com/plugin-docs/api/typings/) file to [@figma-plugin/types](https://www.npmjs.com/package/@figma-plugin/types) NPM module.

## Usage

1. Installation
```sh
npm i --save-dev @figma-plugin/types
# or
yarn add -D @figma-plugin/types
```
2. Configure _tsconfig.json_
```js
{
	"compilerOptions": {
		"moduleResolution": "node"
	}
}
```
3. Create _index.d.ts_ in the root of project and import definitions to apply it globally:
```ts
import "@figma-plugin/types"
```

## About

GitHub Actions cronjob checks for updates for _figma.d.ts_ source every 24 hours, and if new version detected make a release to NPM.
