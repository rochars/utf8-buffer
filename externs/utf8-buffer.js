/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview Externs for utf8-buffer 1.0.0
 * @see https://github.com/rochars/utf8-buffer
 * @externs
 */

/**
 * Read a string of UTF-8 characters from a byte buffer.
 * Invalid characters are replaced with 'REPLACEMENT CHARACTER' (U+FFFD).
 * @see https://encoding.spec.whatwg.org/#the-encoding
 * @see https://stackoverflow.com/a/34926911
 * @param {!Uint8Array|!Array<number>} buffer A byte buffer.
 * @param {number=} start The buffer index to start reading.
 * @param {?number=} end The buffer index to stop reading.
 *    If end is null will read until the end of the buffer.
 * @return {string}
 */
function unpack(buffer, start=0, end=null) {}

/**
 * Write a string of UTF-8 characters to a byte buffer.
 * @see https://encoding.spec.whatwg.org/#utf-8-encoder
 * @param {string} str The string to pack.
 * @param {!Uint8Array|!Array<number>} buffer The buffer to pack the string to.
 * @param {number=} index The buffer index to start writing.
 * @return {number} The next index to write in the buffer.
 */
function pack(str, buffer, index=0) {}
