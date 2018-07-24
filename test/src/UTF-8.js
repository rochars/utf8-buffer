/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview UTF-8 tests.
 * @see https://github.com/rochars/utf8-buffer
 */

var utf8Buffer = utf8Buffer || require('../../test/loader.js');
var assert = assert || require('assert');
var Buffer = Buffer || false;

describe('replace invalid characters', function() {
    it('replaces invalid 2 byte UTF-8 char (2nd byte)', function() {
        assert.equal(utf8Buffer.unpack([0xa0,0xa1]), '\uFFFD\uFFFD');
    });
    // 3 bytes
    it('replaces invalid 3 byte UTF-8 char (2rd byte)', function() {
        assert.equal(utf8Buffer.unpack([0xe2,0x28,0xa1]), '\uFFFD');
    });
    it('replaces invalid 3 byte UTF-8 char (2rd byte)', function() {
        assert.equal(utf8Buffer.unpack(
            [97,0xe2,0x28,0xa1,98]), 'a\uFFFDb');
    });
    it('replaces invalid 3 byte UTF-8 char (3rd byte)', function() {
        assert.equal(utf8Buffer.unpack([0xe2,0x82,0x28]), '\uFFFD');
    });
    it('replaces invalid 3 byte UTF-8 char (3rd byte)', function() {
        assert.equal(utf8Buffer.unpack([0xe2,0xE0,0x28]), '\uFFFD');
    });
    it('replaces invalid 3 byte UTF-8 char (3rd byte)', function() {
        assert.equal(utf8Buffer.unpack([0xe2,0xED,0x28]), '\uFFFD');
    });
    // 4 bytes
    it('replaces invalid 4 byte UTF-8 char (2th byte)', function() {
        assert.equal(utf8Buffer.unpack([0xf0,0x28,0x8c,0xbc]), '\uFFFD');
    });
    it('replaces invalid 4 byte UTF-8 char (3th byte)', function() {
        assert.equal(utf8Buffer.unpack([0xf0,0x90,0x28,0xbc]), '\uFFFD');
    });
    it('replaces invalid 4 byte UTF-8 char (4th byte)', function() {
        assert.equal(utf8Buffer.unpack(
            [97,0xf0,0x28,0x8c,0x28,240,175,167,159,240,175,167,159]),
        'a\uFFFD輸輸');
    });
    it('replaces invalid 4 byte UTF-8 char (4th byte)', function() {
        assert.equal(utf8Buffer.unpack([0xf0,0xF4,0x8c,0x28]), '\uFFFD');
    });
    it('replaces invalid 4 byte UTF-8 char (4th byte)', function() {
        assert.equal(utf8Buffer.unpack([0xf0,0xF0,0x8c,0x28]), '\uFFFD');
    });

})

// pack
describe('unpack UTF-8 strings, 4 bytes', function() {
    it('pack BOM + 輸 as a byte array', function() {
        // 輸 CJK COMPATIBILITY IDEOGRAPH-2F9DF (U+2F9DF) f0 af a7 9f
        var chars = '\ufeff輸';
        assert.deepEqual(
            new Uint8Array([
                0xEF,0xBB,0xBF,
                240,175,167,159]),
            utf8Buffer.pack(chars));
    });
});
describe('unpack UTF-8 strings, 4 bytes', function() {
    it('pack 輸 + BOM + 輸 as a byte array', function() {
        // 輸   CJK COMPATIBILITY IDEOGRAPH-2F9DF (U+2F9DF) f0 af a7 9f
        var chars = '輸\ufeff輸';
        assert.deepEqual(
            new Uint8Array([
                240,175,167,159,
                0xEF,0xBB,0xBF,
                240,175,167,159]),
            utf8Buffer.pack(chars));
    });
});
describe('pack UTF-8 strings, 4 bytes', function() {
    it('pack 輸 as a byte array', function() {
        // 輸 CJK COMPATIBILITY IDEOGRAPH-2F9DF (U+2F9DF) f0 af a7 9f
        var chars = '輸';
        assert.deepEqual(
            new Uint8Array([240,175,167,159]),
            utf8Buffer.pack(chars));
    });
    it('pack 輸輸 as a byte array', function() {
        var chars = '輸輸';
        assert.deepEqual(
            new Uint8Array([
                240,175,167,159,
                240,175,167,159]),
            utf8Buffer.pack(chars));
    });
    it('pack 輸輸笠߹~$ as a byte array', function() {
        var chars = '輸輸笠߹~$';
        assert.deepEqual(
            new Uint8Array([
                240,175,167,159,
                240,175,167,159,
                239, 167, 184,
                223, 185,
                126,
                36]),
            utf8Buffer.pack(chars));
    });
    it('pack 輸輸笠߹~$輸 as a byte array', function() {
        var chars = '輸輸笠߹~$輸';
        assert.deepEqual(
            new Uint8Array([
                240,175,167,159,
                240,175,167,159,
                239, 167, 184,
                223, 185,
                126,
                36,
                240,175,167,159]),
            utf8Buffer.pack(chars));
    });
});
describe('pack UTF-8 strings, 3 bytes', function() {
    it('pack 笠 as a byte array', function() {
        // CJK COMPATIBILITY IDEOGRAPH-F9F8 (U+F9F8) ef a7 b8
        var chars = '笠';
        assert.deepEqual(
            new Uint8Array([239, 167, 184]),
            utf8Buffer.pack(chars));
    });
    it('pack 笠笠 as a byte array', function() {
        var chars = '笠笠';
        assert.deepEqual(
            new Uint8Array([
                239, 167, 184,
                239, 167, 184]),
            utf8Buffer.pack(chars));
    });
    it('pack 笠笠߹~$ as a byte array', function() {
        var chars = '笠笠߹~$';
        assert.deepEqual(
            new Uint8Array([
                239, 167, 184,
                239, 167, 184,
                223, 185,
                126,
                36]),
            utf8Buffer.pack(chars));
    });
    it('pack 笠笠߹~$笠 as a byte array', function() {
        var chars = '笠笠߹~$笠';
        assert.deepEqual(
            new Uint8Array([
                239, 167, 184,
                239, 167, 184,
                223, 185,
                126,
                36,
                239, 167, 184]),
            utf8Buffer.pack(chars));
    });
});
describe('pack UTF-8 strings, 2 bytes', function() {
    it('pack ߹ as a byte array', function() {
        var chars = '߹'; // NKO EXCLAMATION MARK (U+07F9)
        assert.deepEqual(
            new Uint8Array([223, 185]),
            utf8Buffer.pack(chars));
    });
    it('pack ߹߹ as a byte array', function() {
        var chars = '߹߹';
        assert.deepEqual(
            new Uint8Array([223, 185, 223, 185]),
            utf8Buffer.pack(chars));
    });
    it('pack ߹߹~$ as a byte array', function() {
        var chars = '߹߹~$';
        assert.deepEqual(
            new Uint8Array([223, 185, 223, 185, 126, 36]),
            utf8Buffer.pack(chars));
    });
    it('pack ߹߹~$߹ as a byte array', function() {
        var chars = '߹߹~$߹';
        assert.deepEqual(
            new Uint8Array([223, 185, 223, 185, 126, 36, 223, 185]),
            utf8Buffer.pack(chars));
    });
});
describe('pack UTF-8 strings, 1 byte', function() {
    it('pack ~ as a byte array', function() {
        var chars = '~'; // TILDE (U+007E)  7e
        assert.deepEqual(
            new Uint8Array([126]),
            utf8Buffer.pack(chars));
    });
    it('pack ~~ as a byte array', function() {
        var chars = '~~';
       assert.deepEqual(
            new Uint8Array([126, 126]),
            utf8Buffer.pack(chars));
    });
    it('pack ~~$ as a byte array', function() {
        var chars = '~~$';
        assert.deepEqual(
            new Uint8Array([126, 126, 36]),
            utf8Buffer.pack(chars));
    });
    it('pack ~~$~ as a byte array', function() {
        var chars = '~~$~';
        assert.deepEqual(new Uint8Array([126, 126, 36, 126]),
            utf8Buffer.pack(chars));
    });
});
describe('pack ASCII strings', function() {
    it('pack $ as a byte array', function() {
        var chars = '$';
        assert.deepEqual(new Uint8Array([36]), utf8Buffer.pack(chars));
    });
    it('pack $$ as a byte array', function() {
        var chars = '$$';
        assert.deepEqual(new Uint8Array([36, 36]), utf8Buffer.pack(chars));
    });
});

// unpack
describe('unpack UTF-8 strings, 4 bytes with BOM', function() {
    it('unpack BOM + 輸 from a byte buffer', function() {
        // 輸 CJK COMPATIBILITY IDEOGRAPH-2F9DF (U+2F9DF) f0 af a7 9f
        var chars = [
            0xEF,0xBB,0xBF,
            240,175,167,159];
        assert.equal('\ufeff輸', utf8Buffer.unpack(chars));
    });
});
describe('unpack UTF-8 strings', function() {
    it('unpack 𒈓 from a byte buffer', function() {
        // CUNEIFORM SIGN LU2 OPPOSING LU2 (U+12213)
        var chars = [0xF0, 0x92, 0x88, 0x93];
        assert.equal('𒈓', utf8Buffer.unpack(chars));
    });
    it('unpack 𒈓𒈓 from a byte buffer', function() {
        // CUNEIFORM SIGN LU2 OPPOSING LU2 (U+12213)
        var chars = [
            0xF0, 0x92, 0x88, 0x93,
            0xF0, 0x92, 0x88, 0x93];
        assert.equal('𒈓𒈓', utf8Buffer.unpack(chars));
    });
    it('unpack 𒈓𒈓$ from a byte buffer', function() {
        // CUNEIFORM SIGN LU2 OPPOSING LU2 (U+12213)
        var chars = [
            0xF0, 0x92, 0x88, 0x93,
            0xF0, 0x92, 0x88, 0x93,
            36];
        assert.equal('𒈓𒈓$', utf8Buffer.unpack(chars));
    });
    it('unpack 𒈓𒈓$笠 from a byte buffer', function() {
        // CUNEIFORM SIGN LU2 OPPOSING LU2 (U+12213)
        var chars = [
            0xF0, 0x92, 0x88, 0x93,
            0xF0, 0x92, 0x88, 0x93,
            36,
            239, 167, 184];
        assert.equal('𒈓𒈓$笠', utf8Buffer.unpack(chars));
    });
    it('unpack BOM + 𒈓𒈓$笠 from a byte buffer', function() {
        // CUNEIFORM SIGN LU2 OPPOSING LU2 (U+12213)
        var chars = [
            0xEF,0xBB,0xBF,
            0xF0, 0x92, 0x88, 0x93,
            0xF0, 0x92, 0x88, 0x93,
            36,
            239, 167, 184];
        assert.equal('\ufeff𒈓𒈓$笠', utf8Buffer.unpack(chars));
    });
});
describe('unpack UTF-8 strings, 4 bytes', function() {
    it('unpack 輸 from a byte buffer', function() {
        // 輸   CJK COMPATIBILITY IDEOGRAPH-2F9DF (U+2F9DF) f0 af a7 9f
        var chars = [240,175,167,159];
        assert.equal('輸', utf8Buffer.unpack(chars));
    });
    it('unpack 輸輸 from a byte buffer', function() {
        var chars = [
            240,175,167,159,
            240,175,167,159];
        assert.equal('輸輸', utf8Buffer.unpack(chars));
    });
    it('unpack 輸輸笠߹~$ from a byte buffer', function() {
        var chars = [
            240,175,167,159,
            240,175,167,159,
            239, 167, 184,
            223, 185,
            126,
            36];
        assert.equal('輸輸笠߹~$', utf8Buffer.unpack(chars));
    });
    it('unpack 輸輸笠߹~$輸 from a byte buffer', function() {
        var chars = [
            240,175,167,159,
            240,175,167,159,
            239, 167, 184,
            223, 185,
            126,
            36,
            240,175,167,159];
        assert.equal('輸輸笠߹~$輸', utf8Buffer.unpack(chars));
    });
});
describe('unpack UTF-8 strings, 3 bytes', function() {
    it('unpack 笠 from a byte buffer', function() {
        // CJK COMPATIBILITY IDEOGRAPH-F9F8 (U+F9F8) ef a7 b8 // 239 167 184
        var chars = [239, 167, 184];
        assert.equal('笠', utf8Buffer.unpack(chars));
    });
    it('unpack 笠笠 from a byte buffer', function() {
        var chars = [239, 167, 184, 239, 167, 184];
        assert.equal('笠笠', utf8Buffer.unpack(chars));
    });
    it('unpack 笠笠߹~$ from a byte buffer', function() {
        var chars = [
            239, 167, 184,
            239, 167, 184,
            223, 185,
            126,
            36];
        assert.equal('笠笠߹~$', utf8Buffer.unpack(chars));
    });
    it('unpack 笠笠߹~$笠 from a byte buffer', function() {
        var chars = [
            239, 167, 184,
            239, 167, 184,
            223, 185,
            126,
            36,
            239, 167, 184];
        assert.equal('笠笠߹~$笠',utf8Buffer.unpack(chars));
    });
});
describe('unpack UTF-8 strings, 2 bytes', function() {
    it('unpack å from a byte buffer', function() {
        var chars = [195,165];
        assert.equal('å', utf8Buffer.unpack(chars));
    });
    it('unpack ߹ from a byte buffer', function() {
        var chars = [223, 185]; // NKO EXCLAMATION MARK (U+07F9)
        assert.equal('߹', utf8Buffer.unpack(chars));
    });
    it('unpack ߹߹ from a byte buffer', function() {
        var chars = [223, 185, 223, 185];
        assert.equal('߹߹', utf8Buffer.unpack(chars));
    });
    it('unpack ߹߹~$ from a byte buffer', function() {
        var chars = [223, 185, 223, 185, 126, 36];
        assert.equal('߹߹~$', utf8Buffer.unpack(chars));
    });
    it('unpack ߹߹~$߹ from a byte buffer', function() {
        var chars = [223, 185, 223, 185, 126, 36, 223, 185];
        assert.equal('߹߹~$߹', utf8Buffer.unpack(chars));
    });
});
describe('unpack UTF-8 strings, 1 byte', function() {
    it('unpack ~ from a byte buffer', function() {
        var chars = [126]; // TILDE (U+007E)  7e
        assert.equal('~', utf8Buffer.unpack(chars));
    });
    it('unpack ~~ from a byte buffer', function() {
        var chars = [126, 126];
        assert.equal('~~', utf8Buffer.unpack(chars));
    });
    it('unpack ~~$ from a byte buffer', function() {
        var chars = [126, 126, 36];
        assert.equal('~~$', utf8Buffer.unpack(chars));
    });
    it('unpack ~~$~ from a byte buffer', function() {
        var chars = [126, 126, 36, 126];
        assert.equal('~~$~', utf8Buffer.unpack(chars));
    });
});
describe('unpack ASCII strings', function() {
    it('unpack $ from a byte buffer', function() {
        var chars = [36];
        assert.equal('$', utf8Buffer.unpack(chars));
    });
    it('unpack $$ from a byte buffer', function() {
        var chars = [36, 36];
        assert.equal('$$', utf8Buffer.unpack(chars));
    });
});
