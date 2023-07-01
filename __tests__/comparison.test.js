const hbs = require('../dist/build.common');

describe('opr()', () => {
  test('3 === 3 should return true', () => {
    const actual = hbs.compile("{{opr a '===' b}}")({a:3, b:3});
    expect(actual).toBe('true');
  });

  test('3 === "3" should return false', () => {
    const actual = hbs.compile("{{opr a '===' b}}")({a:3, b:'3'});
    expect(actual).toBe('false');
  });

  test('3 == 3 should return true', () => {
    const actual = hbs.compile("{{opr a '==' b}}")({a:3, b:3});
    expect(actual).toBe('true');
  });

  test('3 == "3" should return true', () => {
    const actual = hbs.compile("{{opr a '==' b}}")({a:3, b:'3'});
    expect(actual).toBe('true');
  });

  test('4 !== 3 should return true', () => {
    const actual = hbs.compile("{{opr a '!==' b}}")({a:4, b:3});
    expect(actual).toBe('true');
  });

  test('3 !== "3" should return true', () => {
    const actual = hbs.compile("{{opr a '!==' b}}")({a:3, b:'3'});
    expect(actual).toBe('true');
  });

  test('3 !== 3 should return false', () => {
    const actual = hbs.compile("{{opr a '!==' b}}")({a:3, b:3});
    expect(actual).toBe('false');
  });
});

describe('regexMatch()', () => {
  test('"foobar" should match "foo"', () => {
    const actual = hbs.compile("{{regexMatch 'foobar' 'foo'}}")();
    expect(actual).toBe('true');
  });

  test('"bar" should not match "foo"', () => {
    const actual = hbs.compile("{{regexMatch 'bar' 'foo'}}")();
    expect(actual).toBe('false');
  });

  test('"foobar" should not match "^foo$"', () => {
    const actual = hbs.compile("{{regexMatch 'foobar' '^foo$'}}")();
    expect(actual).toBe('false');
  });

  test('"Visit Here" should match "here" with the i flag', () => {
    const actual = hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();
    expect(actual).toBe('true');
  });

  test('"Visit Here" should not match "here"', () => {
    const actual = hbs.compile("{{regexMatch 'Visit Here' 'here'}}")();
    expect(actual).toBe('false');
  });

  test('"foobar" with the if syntax should match "foo"', () => {
    const actual = hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")();
    expect(actual).toBe('Match');
  });
});