import got from 'got';

const statusCodes = {
	isUp: 1,
	isDown: 2,
	invalidDomain: 3,
};

export default async function isUp(url) {
	const hostname = encodeURIComponent((new URL(url)).hostname);

	const {status_code: statusCode} = await got(`https://isitup.org/${hostname}.json`, {
		headers: {
			'user-agent': 'https://github.com/sindresorhus/is-up',
		},
	}).json();

	if (statusCode === statusCodes.invalidDomain) {
		throw new Error('Invalid domain');
	}

	return statusCode === statusCodes.isUp;
}
