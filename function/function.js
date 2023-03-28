/** 
 * In JavaScript, a function is a block of code that performs a specific task, 
 * which can be executed multiple times throughout your code. 
 * It can be thought of as a reusable piece of code that performs a particular operation. 
 * Functions can take input values (known as parameters) 
 * and produce an output value (known as a return value) that can be used elsewhere in your code.
 * Functions in JavaScript are defined using the function keyword, 
 * followed by a name for the function (which is optional), 
 * and then a set of parentheses that can optionally contain one or more parameters. 
 * The function body is enclosed in curly braces {} and contains the code that will be executed when the function is called.
*/

// Here's an example of a simple function in JavaScript that takes two numbers as input, 
// adds them together, and returns the result:

function addNumbers(num1, num2) {
    return num1 + num2;
  }

// You can call this function later in your code by providing values for num1 and num2, like this:

let result = addNumbers(2, 3);
console.log(result); // Output: 5

// This will call the addNumbers function with num1 set to 2 and num2 set to 3, 
// and then assign the result to the result variable. Finally, it logs the result to the console.