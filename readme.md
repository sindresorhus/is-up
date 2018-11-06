# is-up [![Build Status](https://travis-ci.org/sindresorhus/is-up.svg?branch=master)](https://travis-ci.org/sindresorhus/is-up)

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

*Specifying the protocol is optional.*


## Related

- [is-up-cli](https://github.com/sindresorhus/is-up-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
