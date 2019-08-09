## Description
This framework is designed to build Automation test suites using Node.js

## Features

- [WebdriverIO v5](https://github.com/webdriverio/webdriverio/)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai] (https://github.com/chaijs/chai)
- Page Object pattern


## Getting Started
Install dependencies:

```
npm install
```

## Running Tests
Before running tests locally - start Emmr-frontend application.

Run all tests:

```
npm test
```

In order to run a single spec, you can use:

```
npm run dev specName.js
```

## Browsers configuration
Tests can be run in:
- **Chrome**
- **Chrome headless**
- **Firefox**
- **Safari**

Browsers can be configured in **'capabilities'** section in

##### `wdio.conf.js`

