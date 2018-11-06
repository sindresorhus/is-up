'use strict';
const got = require('got');

const statusCodes = {
	isUp: 1,
	isDown: 2,
	invalidDomain: 3
};

module.exports = async url => {
	url = url.replace(/^(?:https?:)?\/\//, '');
	url = encodeURIComponent(url);

	const {body} = await got(`https://isitup.org/${url}.json`, {
		json: true,
		headers: {
			'user-agent': 'https://github.com/sindresorhus/is-up'
		}
	});

	const statusCode = body.status_code;

	if (statusCode === statusCodes.invalidDomain) {
		throw new Error('Invalid domain');
	}

	return statusCode === statusCodes.isUp;
};
