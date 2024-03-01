const hbs = require('../../dist/build.common');

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