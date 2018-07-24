"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests (with UMD).
 * @see https://github.com/rochars/utf8-buffer
 */
var utf8Buffer = require("../../../dist/utf8-buffer.umd.js");
var arr = utf8Buffer.pack('abc');
var str = utf8Buffer.unpack(arr, 0);
