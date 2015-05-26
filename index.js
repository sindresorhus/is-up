'use strict';
var got = require('got');

module.exports = function (url, cb) {
	got('http://isitup.org/' + url  + '.json', {
		json: true,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/is-up'
		}
	}, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		if (res.status_code === 3) {
			cb(new Error('Invalid domain'));
			return;
		}

		cb(null, res.status_code === 1);
	});
};
