const hbs = require('../../dist/build.common');

test('If the locale is omitted, numbers should be formatted correctly in the default locale', () => {
  const actual = hbs.compile("{{number2locale val}}")({val: 123456.789});
  expect(actual).toBe('123,456.789');
});

test('Numbers should be formatted in German locale', () => {
  const actual = hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
  expect(actual).toBe('123.456,789');
});