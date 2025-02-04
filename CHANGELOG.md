# Changelog
All notable changes to this project will be documented in this file.

## [1.0.12] - 2025/2/4
### Added
- Added a helper to replace HTML tags in a string. See the [stripTags documentation](https://takuya-motoshima.github.io/handlebars-extd/v1/html-helper.html#strip-tags) for more details.

    Example:

    ```js
    // results in: lorem ipsum dolor sit amet
    hbs.compile("{{stripTags html}}")({
        html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
    });
    
    // results in: lorem ipsum <strong>dolor</strong> sit amet
    hbs.compile("{{stripTags html allowedTags}}")({
        html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
        allowedTags: ['strong'],
    });
    
    // results in: 🍩lorem ipsum 🍩dolor🍩 🍩sit🍩 amet🍩
    hbs.compile("{{stripTags html allowedTags replacement}}")({
        html: '<a href="https://example.com">lorem ipsum <strong>dolor</strong> <em>sit</em> amet</a>',
        allowedTags: [],
        replacement: '🍩',
    });
    ```

## [1.0.11] - 2025/1/14
### Added
- **`findObjectInArray` Handlebars helper:** This helper allows you to find an object in an array based on a specified field name and value.
    ```js
    // results in: "Item A"
    const items = [{id: 123, name: 'Item A'}, {id: 456, name: 'Item B'}];
    hbs.compile(
        `{{#each items}}
            {{#if (eq id 123)}}
                {{lookup (findObjectInArray ../items 'id' id) 'name'}}
            {{/if}}
        {{/each}}`)({items});


## [1.0.10] - 2024/7/31
### Fixed
- Fix `TypeError: Cannot read properties of undefined (reading 'Symbol')` error in executing each function on an object.

## [1.0.9] - 2024/3/1
### Changed
- Helpers have been moved to the directory by category. No change in functionality.

## [1.0.8] - 2023/7/1
### Added
- Added regular expression comparison helper.
    ```js
    const hbs = require('handlebars-extd');

    // results in: true
    hbs.compile("{{regexMatch 'foobar' 'foo'}}")();
    
    // results in: false
    hbs.compile("{{regexMatch 'bar' 'foo'}}")();
    
    // results in: false
    hbs.compile("{{regexMatch 'foobar' '^foo$'}}")();

    // results in: true
    hbs.compile("{{regexMatch 'Visit Here' 'here' 'i'}}")();
    
    // results in: false
    hbs.compile("{{regexMatch 'Visit Here' 'here'}}")();

    // results in: Match
    hbs.compile("{{#if (regexMatch 'foobar' 'foo')}}Match{{/if}}")();
    ```

## [1.0.7] - 2023/6/18
### Added
- Added helpers to compute multiplication and division of given values.
    ```js
    const hbs = require('handlebars-extd');

    // results in: 10
    hbs.compile("{{multiply a b}}")({"a":5,"b":2});

    // results in: 5
    hbs.compile("{{divide a b}}")({"a":10,"b":2});
    ```

## [1.0.6] - 2023/6/14
### Added
- Added a helper to convert numeric values to strings with language-sensitive representations.
    ```js
    const hbs = require('handlebars-extd');

    // results in: 123,456.789
    hbs.compile("{{number2locale val}}")({val: 123456.789});

    // German uses comma as decimal separator and period for thousands.
    // results in: 123.456,789
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

    // results in: false
    hbs.compile("{{opr a '===' b}}")({"a":"3","b":3});
    ```

## [1.0.3] - 2022/4/19
### Added
- Add string split helper.
    ```js
    // results in: <ul><li>a</li><li>b</li><li>c</li></ul>
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
    // results in: true
    hbs.compile("{{empty val}}")({"val":[]});

    // results in: false
    hbs.compile("{{empty val}}")({"val":["foo"]});

    // If the value is an array.
    // results in: false
    hbs.compile("{{empty val}}")({"val":'Hello'});

    // results in: true
    hbs.compile("{{empty val}}")({"val":''});

    // results in: true
    hbs.compile("{{empty val}}")({"val":' '});
    ```

## [1.0.1] - 2022/1/17
### Added
- Added notEmpty view helper.
    ```js
    // If the value is an array.
    // results in: false
    hbs.compile("{{notEmpty val}}")({"val":[]});

    // results in: true
    hbs.compile("{{notEmpty val}}")({"val":["foo"]});

    // If the value is an array.
    // results in: true
    hbs.compile("{{notEmpty val}}")({"val":'Hello'});

    // results in: false
    hbs.compile("{{notEmpty val}}")({"val":''});

    // results in: false
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
[1.0.8]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.7...v1.0.8
[1.0.9]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.8...v1.0.9
[1.0.10]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.9...v1.0.10
[1.0.11]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.10...v1.0.11
[1.0.12]: https://github.com/takuya-motoshima/handlebars-extd/compare/v1.0.10...v1.0.12