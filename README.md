# utf8-buffer
ES6 module to encode and decode UTF-8 strings.  
Copyright (c) 2018 Rafael da Silva Rocha.  
https://github.com/rochars/utf8-buffer

[![NPM version](https://img.shields.io/npm/v/utf8-buffer.svg?style=for-the-badge)](https://www.npmjs.com/package/utf8-buffer) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/utf8-buffer/api/) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rawgit.com/rochars/utf8-buffer/master/test/browser.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/utf8-buffer.svg?style=flat-square)](https://codecov.io/gh/rochars/utf8-buffer) [![Unix Build](https://img.shields.io/travis/rochars/utf8-buffer.svg?style=flat-square)](https://travis-ci.org/rochars/utf8-buffer) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/utf8-buffer.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/utf8-buffer) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/utf8-buffer.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/utf8-buffer/)

**utf8-buffer** is a ES6 module to encode and decode UTF-8 strings.

- **MIT licensed**
- **Use it out of the box in the browser**
- **Use it out of the box in Node.js**
- **Use it out of the box with [TypeScript](https://www.typescriptlang.org/)**
- **Use it in little-endian and big-endian hosts!**
- **Less than 3KB minified!**

## Install
```
npm install utf8-buffer
```

You can also download one of the files in the *./dist* folder:  
https://github.com/rochars/utf8-buffer/tree/master/dist

## Use

### Node
If you installed via [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com), **import utf8Buffer from utf8-buffer**:
```javascript
import * as utf8Buffer from 'utf8-buffer';
let packed = utf8Buffer.pack('\uFFFD');
```

Or **import** just what you need:
```javascript
import {pack} from 'utf8-buffer';
let packed = pack('\uFFFD輸');
```

Or **require**:
```javascript
const utf8Buffer = require('utf8-buffer');
let packed = utf8Buffer.pack('笠߹~');
```

### Browser
Use **utf8-buffer.umd.js** in the */dist* folder of this package:
```html
<script src="./dist/utf8-buffer.umd.js"></script>
<script>
  var packed = utf8Buffer.pack('$𒈓eita');
</script>
```

Or load it from the [jsDelivr](https://cdn.jsdelivr.net/npm/utf8-buffer) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/utf8-buffer"></script>
```

Or load it from [unpkg](https://unpkg.com/utf8-buffer):
```html
<script src="https://unpkg.com/utf8-buffer"></script>
```

## About
Only UTF-8 strings with a max of 4 bytes per character are supported. **BOM** is kept untouched. Invalid characters are replaced with *Unicode Character 'REPLACEMENT CHARACTER' (U+FFFD)*.

### Browser compatibility
Should work in all modern browsers. Cross-browser tests are on the [ROADMAP](https://github.com/rochars/utf8-buffer/blob/master/ROADMAP.md).

## API
```javascript
/**
 * Read a string of UTF-8 characters from a byte buffer.
 * Invalid characters are replaced with 'REPLACEMENT CHARACTER' (U+FFFD).
 * @see https://encoding.spec.whatwg.org/#the-encoding
 * @see https://stackoverflow.com/a/34926911
 * @param {!Uint8Array|!Array<!number>} buffer A byte buffer.
 * @param {number=} index The index to read.
 * @param {?number=} len The number of bytes to read.
 *    If len is undefined will read until the end of the buffer.
 * @return {string}
 */
export function unpack(buffer, index=0, len=null) {}

/**
 * Write a string of UTF-8 characters as a byte buffer.
 * @see https://encoding.spec.whatwg.org/#utf-8-encoder
 * @param {string} str The string to pack.
 * @return {!Uint8Array} The packed string.
 */
export function pack(str) {}
```

## Contributing
**utf8-buffer** welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

See [CONTRIBUTING.md](https://github.com/rochars/utf8-buffer/blob/master/CONTRIBUTING.md) for details.

### Style guide
**utf8-buffer** code should follow the Google JavaScript Style Guide:  
https://google.github.io/styleguide/jsguide.html

### Code of conduct
This project is bound by a code of conduct: The [Contributor Covenant, version 1.4](https://github.com/rochars/utf8-buffer/blob/master/CODE_OF_CONDUCT.md), also available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting rocha.rafaelsilva@gmail.com.

## LICENSE
Copyright (c) 2018 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
