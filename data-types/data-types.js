/* 
*  Data types available in JavaScrip:
*  1. String (e.g. 'hello')
*  2. Number (e.g. '4. 10.5')
*  3. Boolean (e.g. 'true | false')
*  4. Undefined and Null
*  5. Regexp
*  6. Object type (Object, Array, Date, etc)
*/

// String
const str = 'str'
let str2 = 'str2'
// concatenate
let str3 = `${str}, World!`
console.log(str, str2, str3);

// Number
const num = 4
let num2 = 4.5
console.log(num, num2);

// Boolean
let bool = true
const bool1 = false
console.log(bool, bool1);

// Object
let obj = {}

// Array
let arr = []

// Regexp
let re = /abc/

// Undefined, Null
let none
let none1 = null

// Print the type of variable
console.log(`the type of str variable is ${typeof str}`);
console.log(`the type of str variable is ${typeof re}`);
console.log(`the type of str variable is ${typeof none}`);
console.log(`the type of str variable is ${typeof null}`);

/* 
*  Falsy values:
*  1. false
*  2. undefined
*  3. null
*  4. 0
*  5. NaN
*  6. "" (empty string)
*/