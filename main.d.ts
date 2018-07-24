// Type definitions for utf8-buffer 0.0.1
// Project: https://github.com/rochars/utf8-buffer
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/utf8-buffer

export function unpack(buffer: Uint8Array|ArrayLike<number>, index?: number, len?: number): string;

export function pack(str: string): Uint8Array;
