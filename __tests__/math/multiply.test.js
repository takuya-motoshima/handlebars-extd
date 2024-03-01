const hbs = require('../../dist/build.common');

test('5 * 2 should be 10', () => {
  const actual = hbs.compile("{{multiply a b}}")({a:5, b:2});;
  expect(actual).toBe('10');
});