"use strict";
/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/utf8-buffer
 */
var index_js_1 = require("../../../index.js");
var buffer = [];
var index = index_js_1.pack('ab', buffer);
index_js_1.pack('cd', buffer, index);
