"use strict";
/**
 * 1. Prevents any undeclared global variable.
 * 2. Use of implements, interfaces, let, package, private, protected, public, static, 
 * and yield as identifiers.
 * 
 */

// Use case 1: Prevents any undeclared global variable.
let a = 1
b = 1 // => undeclared global variable.
console.log(b);

/** 
 * How it works:
 * If "use strict" is commented the b will return '1', 
 * but if "use strict" is NOT commented the result will be 'b' is not defined. 
 * 
 */

// Use case 2: Use of implement package.
let package = 'any package';
console.log(package); // result: Unexpected strict mode reserved word.

/**
 * How it works:
 * JavaScript Keywords have a special meaning in the context of a language. 
 * They are part of the syntax of JavaScript. 
 * These are reserved words and we cannot use them as JavaScript Identifier names. 
 * Using them will result in a compile error.
 * List of Reserved Words: 
 * https://www.tektutorialshub.com/javascript/javascript-keywords-reserved-words/
*/