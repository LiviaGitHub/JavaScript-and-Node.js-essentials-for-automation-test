/** 
 * Here are a few examples of how to use template literals (the equivalent of f-strings in JavaScript):
*/

// 01 - Basic template literal:
const name = "Alice";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: "My name is Alice and I am 25 years old."

// 02 - Arithmetic operations inside template literal:
const a = 10;
const b = 5;
console.log(`${a} + ${b} = ${a + b}`);
// Output: "10 + 5 = 15"

// 03 - Conditional expressions inside template literal:
const x = 5;
console.log(`The value of x is ${x > 0 ? "positive" : "non-positive"}.`);
// Output: "The value of x is positive."

// 04 - Using template literals with functions:
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Alice"));
// Output: "Hello, Alice!"  

