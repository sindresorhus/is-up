#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var pkg = require('./package.json');
var isUp = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Example',
		'    is-up sindresorhus.com',
		'    ' + logSymbols.success + ' Up'
	].join('\n'));
}

if (!input || argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

isUp(input, function (err, up) {
	if (err) {
		throw err;
	}

	console.log(up ? logSymbols.success + ' Up' : logSymbols.error + ' Down');
	process.exit(up ? 0 : 1);
});
