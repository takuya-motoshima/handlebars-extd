require('esbuild').build({
  target: 'es2020',
  platform: 'browser',
  entryPoints: require('glob').sync('./src/**/*.js'),
  outdir: 'dist',
  bundle: true,
  minify: true,
  sourcemap: true
}).catch(() => process.exit(1));