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
  