/** 
 * In JavaScript, a function without a name can be created using an anonymous function expression. 
 * An anonymous function is a function without a name, 
 * and it can be defined inside another function or directly passed as an argument to another function.
*/

// example 01: Define an anonymous function and pass it as an argument to the `setTimeout` function
// In this example, the setTimeout function takes an anonymous function as its first argument, 
// and the anonymous function will be executed after 1000 milliseconds.
setTimeout(function() {
    console.log('Hello, world!');
  }, 1000);
  
// example 02: Define an anonymous function and immediately invoke it
// In this example, the anonymous function is defined inside a set of parentheses, 
// and then the function is immediately invoked by adding another set of parentheses at the end of the expression.
// By using anonymous functions, you can pass around functions as values, which is a powerful feature of JavaScript.
(function() {
    console.log('Hello, world!');
  })();
  

// Define a function expression and assign it to a variable named `add`
const add = function(num1, num2) {
    return num1 + num2;
  };
  
// Call the `add` function
const sum = add(2, 3); // sum is now 5

// In this example, the function expression is assigned to a variable named add using the const keyword. 
// The function takes two parameters num1 and num2, and it returns the sum of these two numbers.
// After defining the add function, 
// you can call it like any other function and assign the result to a variable named sum. 
// The sum variable now holds the value 5, which is the result of adding 2 and 3 using the add function.
// Assigning a function to a variable is useful because it allows you to pass the function around as a value, 
// just like any other variable.