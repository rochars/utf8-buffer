define(function (require) {
    var utf8Buffer = require('../../../../dist/utf8-buffer.js');
    var buffer = [];
    utf8Buffer.pack('abc', buffer)
    console.log(buffer);
    document.write('OK');
});
