# CHANGELOG

## 1.0.0 - 2019-12-31
- New package structure:
	* dist file is "./dist/utf8-buffer.js", a UMD served as "main"
	* ES6 source is "./index.js", served as "module"

## 0.2.0 (2018-08-05)
- unpack(buffer, start, end) API change: end now is non-inclusive

## 0.1.0 (2018-07-27)
- pack(str):Uint8Array updated to pack(str, buffer, index=0):number
	- *buffer* is the buffer you are writing to (ideally Uint8Array, but will work the same with Array or any Array-like object).
	- *index* is a optional param with the buffer index to start writing. Assumes zero by default.
	- The return value is a *number*, the next index to write in the array.
- unpack(buffer, index, len) updated to unpack(buffer, start, end)
	- *start* is the buffer index to start reading.
	- *end* is the buffer index to end reading.
- works in IE8+.
