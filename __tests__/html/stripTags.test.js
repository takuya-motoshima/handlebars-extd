const hbs = require('../../dist/build.common');

describe('stripTags Handlebars helper', () => {
  const testCases = [
    {
      html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
      expected: 'lorem ipsum dolor sit amet',
    },
    {
      html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
      allowedTags: ['strong'],
      expected: 'lorem ipsum <strong>dolor</strong> sit amet',
    },
    {
      html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
      allowedTags: [],
      replacement: '🍩',
      expected: '🍩lorem ipsum 🍩dolor🍩 🍩sit🍩 amet🍩',
    },
  ];

  testCases.forEach(({html, allowedTags, replacement, expected}, index) => {
    const allowedTagsDesc = allowedTags ? `allowedTags: ${JSON.stringify(allowedTags)}, ` : '';
    const replacementDesc = replacement ? `replacement: ${JSON.stringify(replacement)}, ` : '';
    it(`should strip HTML tags correctly (test case ${index + 1}: ${allowedTagsDesc}${replacementDesc}html: ${JSON.stringify(html)})`, () => {
      const template = hbs.compile(`{{{stripTags html allowedTags replacement}}}`);
      const actual = template({html, allowedTags, replacement});
      expect(actual).toBe(expected);
    });
  });
});