## Quick start

* Create a package.json file:
  ```bash
  npm init -y
  ```

* Install esbuild and glob required for build:
  ```bash
  npm i -D esbuild glob
  ```

* Install handlebars-extd:
  ```bash
  npm i handlebars-extd
  ```

* Create a "build.js" file on the root of your project: 
  ```js
  require('esbuild').build({
    target: 'es2020',
    platform: 'browser',
    entryPoints: require('glob').sync('./src/**/*.js'),
    outdir: 'dist',
    bundle: true,
    minify: true,
    sourcemap: true
  }).catch(() => process.exit(1));
  ```

* Write code to compile the template using "handlebars-extd" into "src/app.js":
  ```js
  import hbs from 'handlebars-extd';

  const tpl = hbs.compile(`
    {{#if (gt a 0)}}
      positive
    {{else}}
      NOT positive
    {{/if}}`);
  
  // Output: positive
  console.log(tpl({a: 5}));

  // Output: NOT positive
  console.log(tpl({a: -5}));
  ```

* Run your build:
  ```bash
  node build.js
  ```

  If the build is successful, the built file will be generated in "dist/app.js".  
  When you load this file in your browser, you should see the following text on the console:
  ```text
  positive
  NOT positive
  ```

* You should change your build scripts to use this build command.
  ```json
  "scripts": {
    "build": "node ./build.js"
  },
  ```

## What is this?

This is a simple example showing how to use [esbuild](https://esbuild.github.io/) to bundle up an app using handlebars-extd.  
This will browserify "src/app.js" and create a distribution file in "dist/app.js".
Load index.html in a browser and open up the console to see sample output.

## Author

**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License

[MIT](LICENSE)