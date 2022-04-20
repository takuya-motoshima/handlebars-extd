# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2022-04-20
### Fixed
- Fixed a bug that causes errors in node.js.
  ```js
  const hbs = require('handlebars-extd');

  // Output: false
  hbs.compile("{{opr a '===' b}}")({"a":"3","b":3});
  ```

## [1.0.3] - 2022-04-19
### Fixed
- Add string split helper.
  ```js
  // Output: <ul>
  //           <li>a</li>
  //           <li>b</li>
  //           <li>c</li>
  //         </ul>
  hbs.compile(`<ul>
                {{#each (split list ',')}}
                  <li>{{this}}</li>
                {{/each}}
              </ul>`)({"list":"a,b,c"});
  ```

## [1.0.2] - 2022-01-17
### Fixed
- empty view helper can now check any type. Previously I could only check arrays.

## [1.0.1] - 2022-01-17
### Fixed
- empty view helper can now check any type. Previously I could only check arrays.
  ```js
  // If the value is an array.
  // Output: true
  hbs.compile("{{empty val}}")({"val":[]});

  // Output: false
  hbs.compile("{{empty val}}")({"val":["foo"]});

  // If the value is an array.
  // Output: false
  hbs.compile("{{empty val}}")({"val":'Hello'});

  // Output: true
  hbs.compile("{{empty val}}")({"val":''});

  // Output: true
  hbs.compile("{{empty val}}")({"val":' '});
  ```

- Added notEmpty view helper.
  ```js
  // If the value is an array.
  // Output: false
  hbs.compile("{{notEmpty val}}")({"val":[]});

  // Output: true
  hbs.compile("{{notEmpty val}}")({"val":["foo"]});

  // If the value is an array.
  // Output: true
  hbs.compile("{{notEmpty val}}")({"val":'Hello'});

  // Output: false
  hbs.compile("{{notEmpty val}}")({"val":''});

  // Output: false
  hbs.compile("{{notEmpty val}}")({"val":' '});
  ```

## [1.0.0] - 2021-10-24
### Fixed
- First release.

[1.0.1]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.3...v1.0.4