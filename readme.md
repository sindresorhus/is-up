# is-up [![Build Status](https://travis-ci.org/sindresorhus/is-up.svg?branch=master)](https://travis-ci.org/sindresorhus/is-up)

> Check whether a website is up or down using the [isitup.org](http://isitup.org) API


## Install

```
$ npm install --save is-up
```


## Usage

```js
const isUp = require('is-up');

isUp('sindresorhus.com').then(up => {
	console.log(up);
	//=> true
});
```


## Related

- [is-up-cli](https://github.com/sindresorhus/is-up-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
