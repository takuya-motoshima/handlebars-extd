const hbs = require('../../dist/build.common');

describe('regexMatch Handlebars helper', () => {
  const testCases = [
    {text: 'foobar', pattern: 'foo', flags: undefined, expected: 'true'},
    {text: 'bar', pattern: 'foo', flags: undefined, expected: 'false'},
    {text: 'foobar', pattern: '^foo$', flags: undefined, expected: 'false'},
    {text: 'Visit Here', pattern: 'here', flags: 'i', expected: 'true'},
    {text: 'Visit Here', pattern: 'here', flags: undefined, expected: 'false'},
    {text: 'foobar', pattern: 'foo', flags: undefined, expected: 'Match', template: '{{#if (regexMatch text pattern flags)}}Match{{/if}}'}, // if syntax
  ];

  testCases.forEach(({ text, pattern, flags, expected, template }, index) => {
    it(`should return ${expected} for "${text}" matching "${pattern}" with flags "${flags}" (test case ${index + 1})`, () => {
      const compiledTemplate = hbs.compile(template || '{{regexMatch text pattern flags}}'); // Use custom template if provided
      const actual = compiledTemplate({ text, pattern, flags });
      expect(actual).toBe(expected);
    });
  });
});