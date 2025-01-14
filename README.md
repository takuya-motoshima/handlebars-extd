# Handlebars extension

This package provides a set of powerful and convenient Handlebars helpers to enhance your templating experience. 
It simplifies common tasks and adds useful functionalities to your Handlebars templates.

## Documentation
Handlebars extension documentation can be found [here](https://takuya-motoshima.github.io/handlebars-extd/v1/).

## Installation
```bash
npm install --save handlebars-extd
```

## Release Notes
All changes can be found [here](CHANGELOG.md).

- [1.0.11] - 2025/1/14
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
- [1.0.10] - 2024/7/31
    - Fix `TypeError: Cannot read properties of undefined (reading 'Symbol')` error in executing each function on an object.
- [1.0.9] - 2024/3/1
    - Helpers have been moved to the directory by category. No change in functionality.

## Testing
With [npm](http://npmjs.org) do:

```bash
npm test
```

## Author
**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License
[MIT](LICENSE)