# NPM module of figma.d.ts
[![npm](https://img.shields.io/npm/v/@figma-plugin/figma.d.ts?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/@figma-plugin/figma.d.ts)

This repository automatically making releases of [official Figma plugin Typescript definitions](https://www.figma.com/plugin-docs/api/typings/) file to [@figma-plugin/figma.d.ts](https://www.npmjs.com/package/@figma-plugin/figma.d.ts) NPM module.

## Usage

1. Installation
```sh
npm i --save-dev @figma-plugin/figma.d.ts
# or
yarn add -D @figma-plugin/figma.d.ts
```
2. Configure _tsconfig.json_
```js
{
	"files": ["./node_modules/@figma-plugin/figma.d.ts/figma.d.ts"]
}
```
3. Create _index.d.ts_ in the root of project and import definitions to apply it globally:
```ts
import "@figma-plugin/figma.d.ts"
```

## About

GitHub Actions cronjob checks for updates for _figma.d.ts_ source every 24 hours, and if new version detected make a release to NPM.
