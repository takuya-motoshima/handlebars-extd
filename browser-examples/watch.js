const {build: esbuild} = require('esbuild');
const chokidar = require('chokidar');
const fs = require('fs-extra');

async function build() {
  // await fs.rmdirSync('./dist', {recursive: true});
  await esbuild({
    target: 'es2020',
    platform: 'browser',
    entryPoints: require('glob').sync('./src/**/*.js'),
    outdir: 'dist',
    bundle: true,
    minify: true,
    sourcemap: true
  }).catch(() => process.exit(1));
};

chokidar.watch('.', {ignored: /dist|node_modules|.git/}).on('all', (event, path) => {
  console.log(event, path);
  build();
});