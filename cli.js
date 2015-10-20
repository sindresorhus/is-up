#!/usr/bin/env node
'use strict';
var meow = require('meow');
var logSymbols = require('log-symbols');
var isUp = require('./');

var cli = meow({
	help: [
		'Example',
		'  is-up sindresorhus.com',
		'  ' + logSymbols.success + ' Up'
	]
});

isUp(cli.input).then(function (up) {
	console.log(up ? logSymbols.success + ' Up' : logSymbols.error + ' Down');
	process.exit(up ? 0 : 1);
});
