import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
// import alias from '@rollup/plugin-alias';
// import pkg from './package.json';
// import replace from '@rollup/plugin-replace';

// Determine whether it is a production environment
const isPro = () => {
  return process.env.NODE_ENV === 'production';
}

export default {
  // external: Object.keys(pkg['dependencies'] || []),
  input: './src/index.ts',
  plugins: [
    // alias({
    //   entries: {
    //     'sprintf-js': 'sprintf-js/dist/sprintf.min.js'
    //   }
    // }),
    // replace({
    //   // When you "each" an object in handlebars.js, "global.Symbol" is an undefined error because there is no reference to the "window" object in "global".So replace global with window.
    //   include: '**/handlebars.*',
    //   values: {
    //     'global.Symbol': 'window.Symbol'
    //   }
    // }),
    typescript({
      tsconfigDefaults: {compilerOptions: {}},
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {compilerOptions: {}},
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true
    }),
    isPro() && terser(),
    json(),
    commonjs(),
    nodeResolve({
      mainFields: ['module', 'main']
    })
  ],
  output: [
    // // ES module (for bundlers) build.
    // {
    //   format: 'esm',
    //   file: pkg.module
    // },
    // // CommonJS (for Node) build.
    // {
    //   format: 'cjs',
    //   file: pkg.main
    // },
    // // browser-friendly UMD build
    // {
    //   format: 'umd',
    //   file: pkg.browser,
    //   name: pkg.name
    //     .replace(/^.*\/|\.js$/g, '')
    //     .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
    // }
  ],
  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}