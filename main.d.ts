// Type definitions for utf8-buffer 0.0.1
// Project: https://github.com/rochars/utf8-buffer
// Definitions by: Rafael S. Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/utf8-buffer

export function unpackUTF8(buffer: Uint8Array|ArrayLike<number>, index?: number, len?: number): string;

export function packUTF8(str: string): ArrayLike<number>;
