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
 * 
 * In JavaScript, a function has two main stages:
 * 
 * [Function Definition] This is the stage where you define the function and its behavior. 
 * It involves writing the code that specifies what the function will do when called.
 * 
 * [Function Invocation/Call] This is the stage where you actually call or invoke the function, 
 * passing in any necessary arguments, and using the return value as needed.
 */

// For example, here's a function definition that takes two parameters and returns their sum:
// adds them together, and returns the result:
function addNumbers(num1, num2) {
    return num1 + num2;
  }

// For example, to call the addNumbers function defined above, you would do something like this:

let result = addNumbers(2, 3);
console.log(result); // Output: 5

// This will call the addNumbers function with num1 set to 2 and num2 set to 3, 
// and then assign the result to the result variable. Finally, it logs the result to the console.

// It's important to note that function definition and function invocation are separate stages, 
// and a function won't execute until it's invoked/called.