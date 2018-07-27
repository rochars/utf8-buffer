/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/utf8-buffer
 */

import closure from 'rollup-plugin-closure-compiler-js';
import fs from 'fs';

// Externs
const externsFile = fs.readFileSync('./externs/utf8-buffer.js', 'utf8');

// Legal
const license = '/*!\n'+
  ' * https://github.com/rochars/utf8-buffer.\n'+
  ' * Copyright (c) 2018 Rafael da Silva Rocha.\n' +
  ' */\n';

// GCC UMD wrapper
const outputWrapper = '%output%' +
  'var module=module||{};module.exports=exports;' +
  'var define=define||function(){};' +
  'define(["exports"],function(e){return module.exports;});' +
  'var utf8Buffer=exports;'

export default [
  // ES6 bundle
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer.js',
        format: 'es'
      },
    ]
  },
  // UMD, minified
  {
    input: 'dist/utf8-buffer.js',
    output: [
      {
        file: 'dist/utf8-buffer.umd.js',
        format: 'cjs',
        strict: false,
        banner: 'var exports=exports||{};'
      }
    ],
    plugins: [
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        outputWrapper: license + outputWrapper,
        externs: [{src: externsFile + 'exports={};'}]
      })
    ]
  },
];
