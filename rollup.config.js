/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/utf8-buffer
 */

import closure from 'rollup-plugin-closure-compiler-js';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fs from 'fs';

// Externs
const externsFile = fs.readFileSync('./externs/utf8-buffer.js', 'utf8');

// Legal
const license = '/*!\n'+
  ' * https://github.com/rochars/utf8-buffer.\n'+
  ' * Copyright (c) 2018 Rafael da Silva Rocha.\n' +
  ' */\n';

// GCC wrapper
const outputWrapper = license + '"use strict";if(typeof exports!=="undefined"){var window={};}'+
  '%output%' +
  'var module=module||{};module.exports=exports;' +
  'var define=define||function(){};' +
  'define(["exports"],function(e){return module.exports;});'

export default [
  // ES6 bundle
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer.js',
        format: 'es'
      },
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  },
  // ES5 UMD
  {
    input: 'main.js',
    output: [
      {
        file: 'dist/utf8-buffer.umd.js',
        name: 'utf8Buffer',
        format: 'cjs',
        strict: false,
        banner: 'var exports=exports||{};' +
        'if(window){window["utf8Buffer"]=exports;}'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        outputWrapper: outputWrapper,
        externs: [{src: externsFile + 'exports={};'}]
      }),
    ]
  },
];
