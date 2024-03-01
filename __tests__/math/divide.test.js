const hbs = require('../../dist/build.common');

test('10 / 2 should be 5', () => {
  const actual = hbs.compile("{{divide a b}}")({a:10, b:2});
  expect(actual).toBe('5');
});