/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests (with UMD).
 * @see https://github.com/rochars/utf8-buffer
 */

import * as utf8Buffer from '../../../dist/utf8-buffer.umd.js'

let arr = utf8Buffer.pack('abc');
let str = utf8Buffer.unpack(arr, 0);
