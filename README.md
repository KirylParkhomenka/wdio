## Description
This project uses [WebdriverIO v5](https://github.com/webdriverio/webdriverio/) and [Mocha](https://github.com/mochajs/mocha) and designed to create Automation tests with Node.js

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
- Chrome
- Chrome headless
- Firefox
- Safari

Browsers can be configured in **'capabilities'** section in

##### `wdio.conf.js`

