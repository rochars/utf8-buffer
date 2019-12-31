/**
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 * https://github.com/rochars/utf8-buffer
 *
 */

let utf8Buffer;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	utf8Buffer = require('../dist/utf8-buffer.js');

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	utf8Buffer = require('../index.js');
}

module.exports = utf8Buffer;
