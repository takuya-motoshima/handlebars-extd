const hbs = require('../dist/build.common');

describe('opr()', () => {
  test('3 === 3 should return true.', () => {
    const actual = hbs.compile("{{opr a '===' b}}")({a:3, b:3});
    expect(actual).toBe('true');
  });

  test('3 === "3" should return false.', () => {
    const actual = hbs.compile("{{opr a '===' b}}")({a:3, b:'3'});
    expect(actual).toBe('false');
  });

  test('3 == 3 should return true.', () => {
    const actual = hbs.compile("{{opr a '==' b}}")({a:3, b:3});
    expect(actual).toBe('true');
  });

  test('3 == "3" should return true.', () => {
    const actual = hbs.compile("{{opr a '==' b}}")({a:3, b:'3'});
    expect(actual).toBe('true');
  });

  test('4 !== 3 should return true.', () => {
    const actual = hbs.compile("{{opr a '!==' b}}")({a:4, b:3});
    expect(actual).toBe('true');
  });

  test('3 !== "3" should return true.', () => {
    const actual = hbs.compile("{{opr a '!==' b}}")({a:3, b:'3'});
    expect(actual).toBe('true');
  });

  test('3 !== 3 should return false.', () => {
    const actual = hbs.compile("{{opr a '!==' b}}")({a:3, b:3});
    expect(actual).toBe('false');
  });
});