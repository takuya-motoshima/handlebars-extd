const hbs = require('../../dist/build.common');

describe('number2locale Handlebars helper', () => {
  const testCases = [
    {locale: undefined, value: 123456.789, expected: '123,456.789'}, // Default locale
    {locale: 'de-DE', value: 123456.789, expected: '123.456,789'}, // German locale
  ];

  testCases.forEach(({locale, value, expected}, index) => {
    const localeDescription = locale ? `in ${locale} locale` : 'in the default locale';
    it(`should format ${value} correctly ${localeDescription} (test case ${index + 1})`, () => {
      const template = hbs.compile(`{{number2locale val locale}}`);
      const actual = template({val: value, locale: locale});
      expect(actual).toBe(expected);
    });
  });
});