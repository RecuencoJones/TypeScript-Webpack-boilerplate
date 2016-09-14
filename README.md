[![Build Status](https://travis-ci.org/RecuencoJones/typescript-webpack-boilerplate.png?branch=develop)](https://travis-ci.org/RecuencoJones/typescript-webpack-boilerplate)

# TypeScript Webpack Boilerplate

A template for TypeScript projects. It works well both for final 
applications and class libraries.

## Using the library

### Browser
Import `/~/typescript-webpack-boilerplate/dist/index.js`. 
The library will be under the **TWB** namespace.
 
### CommonJS
Import with `require('typescript-webpack-boilerplate')`.

## Definitions file

It is highly recommended to create a definitions file so others can
work with the library, if possible, hosting it at DefinitelyTyped
repository would be the best.

## Working with the project

Remember to update the barrel [app/Index.ts](app/Index.ts) if you want 
to export new functionalities. Also, you will need to update the type 
definitions.

## Scripts

- `npm run setup`: run this command to install typings.
- `npm start`: run the default dev task.
- `npm run build`: build TypeScript sources and UMD distributable.
- `npm test`: run all tests.
- `npm run test:unit`: run unit tests only.
- `npm run test:coverage`: run coverage tests.

## Coverage

The coverage reports can be found under `test/results/coverage`.

## Sonar

You will need to add the plugin [SonarTsPlugin](https://github.com/Pablissimo/SonarTsPlugin).
 
