const hbs = require('../../dist/build.common');

describe('opr Handlebars helper', () => {
  const testCases = [
    {operator: '===', a: 3, b: 3, expected: 'true'},
    {operator: '===', a: 3, b: '3', expected: 'false'},
    {operator: '==', a: 3, b: 3, expected: 'true'},
    {operator: '==', a: 3, b: '3', expected: 'true'},
    {operator: '!==', a: 4, b: 3, expected: 'true'},
    {operator: '!==', a: 3, b: '3', expected: 'true'},
    {operator: '!==', a: 3, b: 3, expected: 'false'},
  ];

  testCases.forEach(({ operator, a, b, expected }, index) => {
    it(`should return ${expected} for ${a} ${operator} ${b} (test case ${index + 1})`, () => {
      const template = hbs.compile(`{{opr a '${operator}' b}}`);
      const actual = template({ a, b });
      expect(actual).toBe(expected);
    });
  });
});