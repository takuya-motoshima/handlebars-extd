# Changelog
All notable changes to this project will be documented in this file.

## [1.0.7] - 2023/6/18
### Added
- Added helpers to compute multiplication and division of given values.
    ```js
    const hbs = require('handlebars-extd');

    // Output: 10
    hbs.compile("{{multiply a b}}")({"a":5,"b":2});

    // Output: 5
    hbs.compile("{{divide a b}}")({"a":10,"b":2});
    ```

## [1.0.6] - 2023/6/14
### Added
- Added a helper to convert numeric values to strings with language-sensitive representations.
    ```js
    const hbs = require('handlebars-extd');

    // Output: 123,456.789
    hbs.compile("{{number2locale val}}")({val: 123456.789});

    // German uses comma as decimal separator and period for thousands.
    // Output: 123.456,789
    hbs.compile("{{number2locale val 'de-DE'}}")({val: 123456.789});
    ```

## [1.0.5] - 2022/12/23
### Fixed
- Resolved moment vulnerabilities. Updated version of moment from 2.29.1 to 2.29.4.  
    Reference information: https://github.com/moment/moment/security/advisories/GHSA-8hfj-j24r-96c4    

## [1.0.4] - 2022/4/20
### Fixed
- Fixed a bug that causes errors in node.js.
    ```js
    const hbs = require('handlebars-extd');

    // Output: false
    hbs.compile("{{opr a '===' b}}")({"a":"3","b":3});
    ```

## [1.0.3] - 2022/4/19
### Added
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

## [1.0.2] - 2022/1/17
### Changed
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

## [1.0.1] - 2022/1/17
### Added
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

## [1.0.0] - 2021/10/24
### Added
- First release.

[1.0.1]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.5...v1.0.6
[1.0.7]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.6...v1.0.7