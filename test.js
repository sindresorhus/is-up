import test from 'ava';
import uniqueString from 'unique-string';
import isUp from './index.js';

test('up', async t => {
	t.true(await isUp('https://google.com'));
});

test('down', async t => {
	t.false(await isUp(`https://foobar${uniqueString()}.com`));
});

test('invalid domain', async t => {
	await t.throwsAsync(isUp('unicorn'), {message: 'Invalid URL'});
});
