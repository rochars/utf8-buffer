/*!
 * https://github.com/rochars/utf8-buffer.
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
var m="function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,c){b!=Array.prototype&&b!=Object.prototype&&(b[a]=c.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(b){if(b){for(var a=n,c=["String","prototype","codePointAt"],e=0;e<c.length-1;e++){var h=c[e];h in a||(a[h]={});a=a[h]}c=c[c.length-1];e=a[c];b=b(e);b!=e&&null!=b&&m(a,c,{configurable:!0,writable:!0,value:b})}}
p(function(b){return b?b:function(a){if(null==this)throw new TypeError("The 'this' value for String.prototype.codePointAt must not be null or undefined");var c=this.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var b=this.charCodeAt(a);if(55296>b||56319<b||a+1===c)return b;a=this.charCodeAt(a+1);return 56320>a||57343<a?b:1024*(b-55296)+a+9216}}});
var q={unpack:function(b,a,c){c=void 0===c?null:c;c=null!==c?c+1:b.length;var e="";for(a=void 0===a?0:a;a<c;){var h=128,f=191,g=!1,d=b[a++];if(0<=d&&127>=d)e+=String.fromCharCode(d);else{var k=0;194<=d&&223>=d?k=1:224<=d&&239>=d?(k=2,224===b[a]&&(h=160),237===b[a]&&(f=159)):240<=d&&244>=d?(k=3,240===b[a]&&(h=144),244===b[a]&&(f=143)):g=!0;d&=(1<<8-k-1)-1;for(var l=0;l<k;l++){if(b[a]<h||b[a]>f)g=!0;d=d<<6|b[a]&63;a++}g?e+=String.fromCharCode(65533):65535>=d?e+=String.fromCharCode(d):(d-=65536,e+=String.fromCharCode((d>>
10&1023)+55296,(d&1023)+56320))}}return e},pack:function(b,a,c){c=void 0===c?0:c;for(var e=0,h=b.length;e<h;e++){var f=b.codePointAt(e);if(128>f)a[c]=f,c++;else{var g=0,d=0;2047>=f?(g=1,d=192):65535>=f?(g=2,d=224):1114111>=f&&(g=3,d=240,e++);a[c]=(f>>6*g)+d;for(c++;0<g;)a[c]=128|f>>6*(g-1)&63,c++,g--}}return c++}},exports=q||{};Object.defineProperty(q,"__esModule",{value:!0});var module=module||{};module.exports=exports;var define=define||function(){};define(["exports"],function(e){return module.exports;});var utf8Buffer=exports;
