# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2022-01-17
- empty view helper can now check any type. Previously I could only check arrays.
  ```html
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
  ```html
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