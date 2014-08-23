'use strict';
var test = require('ava');
var isUp = require('./');

test('up', function (t) {
	t.plan(2);

	isUp('google.com', function (err, up) {
		t.assert(!err, err);
		t.assert(up);
	});
});

test('down', function (t) {
	t.plan(2);

	isUp('afsadgsdcgdcfgefcasfcascfsadf.com', function (err, up) {
		t.assert(!err, err);
		t.assert(!up);
	});
});

test('invalid domain', function (t) {
	t.plan(1);

	isUp('hi', function (err) {
		t.assert(err.message === 'Invalid domain', err);
	});
});
