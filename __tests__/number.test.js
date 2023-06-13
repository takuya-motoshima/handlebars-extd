const hbs = require('../dist/build.common');

describe('number2locale()', () => {
  test('Numbers should be converted to the host locale.', () => {
    const actual = hbs.compile("{{number2locale val}}")({val: 123456.789});
    expect(actual).toBe('123,456.789');
  });

  test('Numbers should be converted to German locale.', () => {
    const actual = hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
    expect(actual).toBe('123.456,789');
  });
});