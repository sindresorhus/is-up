'use strict';
var got = require('got');

module.exports = function (url) {
	return got('http://isitup.org/' + url + '.json', {
		json: true,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/is-up'
		}
	}).then(function (res) {
		if (res.body.status_code === 3) {
			throw new Error('Invalid domain');
		}

		return res.body.status_code === 1;
	});
};
