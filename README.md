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

- [1.0.12] - 2025/2/4
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