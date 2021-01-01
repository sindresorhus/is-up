# is-up

> Check whether a website is up or down using the [isitup.org](https://isitup.org) API

## Install

```
$ npm install is-up
```

## Usage

```js
const isUp = require('is-up');

(async () => {
	console.log(await isUp('https://sindresorhus.com'));
	//=> true
})();
```

## Related

- [is-up-cli](https://github.com/sindresorhus/is-up-cli) - CLI for this module
