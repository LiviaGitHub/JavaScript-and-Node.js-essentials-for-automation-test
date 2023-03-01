/**
 * String is a sequence of characters enclosed within a pair of quotes, 
 * either single quotes ('') or double quotes (""). 
 * Strings are used to represent textual data and can contain letters, numbers, symbols, and whitespace. 
 * In some programming languages, such as Python, strings are immutable, meaning that they cannot be changed once they are created.
 */

// Use case 1: Assigning a string to a variable:
let name = "Alice";

// Use case 2: Concatenating strings using the + operator:
let firstName = "Alice";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "Alice Smith"

// Use case 3: Accessing characters in a string using bracket notation:
let message = "Hello, world!";
console.log(message[0]); // Output: "H"
console.log(message[7]); // Output: "w"

// Use case 4: Finding the length of a string using the length property:
let message2 = "Hello, world!";
console.log(message.length); // Output: 13

// Use case 5: Converting a string to uppercase or lowercase using the toUpperCase() and toLowerCase() methods:
let message3 = "Hello, world!";
console.log(message.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(message.toLowerCase()); // Output: "hello, world!"

/** 
 * A template literal is a new way of declaring strings in JavaScript 
 * that allows for the easy embedding of variables and expressions. 
 * It is denoted by enclosing the string in backticks (``) instead of single or double quotes. 
 * Inside the template literal, you can use placeholders ${} to interpolate variables, expressions, or even function calls.
*/

let name1 = "Alice";
let message4 = `Hello, ${name1}!`;
console.log(message); // Output: "Hello, Alice!"

// In this example, the variable name is interpolated into the string using ${}. 
// The resulting string is assigned to the variable message, 
// which is then printed to the console using console.log(). 
// Template literals are a more concise and readable way to declare strings with dynamic content than concatenation or string interpolation using the + operator