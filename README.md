## Description

This framework is designed to build Automation test suites using Node.js

## Features

- [WebdriverIO v5](https://github.com/webdriverio/webdriverio/)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](https://github.com/chaijs/chai)
- Page Object pattern

## Getting Started

Install dependenciess

```
yarn install
```

## Running Tests

Before running tests locally - start Emmr-frontend application.

Run all tests:

```
yarn test
```

In order to run a single spec, you can use:

```
yarn dev specName.js
```

## Browsers configuration

Tests can be run in:

- **Chrome**
- **Chrome headless**
- **Firefox**
- **Safari**

Browsers can be configured in **'capabilities'** section in

##### `wdio.conf.js`

Note: works well on Windows 10 with node v10.16.3
