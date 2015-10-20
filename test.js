import test from 'ava';
import fn from './';

test('up', async t => {
	t.true(await fn('google.com'));
});

test('down', async t => {
	t.false(await fn('afsadgsdcgdcfgefcasfcascfsadf.com'));
});

test('invalid domain', async t => {
	try {
		await fn('hi');
		t.fail('Should throw error');
	} catch (err) {
		t.is(err.message, 'Invalid domain');
	}
});
