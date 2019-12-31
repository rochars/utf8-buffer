/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/utf8-buffer
 */

import { pack, unpack } from '../../../index.js'

let buffer = [];
let index = pack('ab', buffer);
pack('cd', buffer, index);
