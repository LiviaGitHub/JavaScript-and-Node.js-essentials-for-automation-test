/**
 * In JavaScript, the return statement is used to exit a function and return a value to the caller. 
 * When a return statement is encountered inside a function, 
 * it immediately stops the execution of the function and returns the value specified in the statement.
*/

// Here's an example:
function multiply(a, b) {
    return a * b; // returns the product of a and b to the caller
  }
  
  const result = multiply(3, 4); // calls the multiply function and stores the result in the variable 'result'
  console.log(result); // logs 12 to the console
  /** 
   * In the above example, the multiply function takes two parameters a and b, 
   * multiplies them together using the * operator, and returns the result using the return statement. 
   * When the function is called with arguments 3 and 4, it returns the value 12, 
   * which is stored in the variable result. 
   * Finally, the value of result is logged to the console using console.log().
  */

  // Note that a function can have multiple return statements, 
  // but only one will be executed each time the function is called. For example:
  function absoluteValue(x) {
    if (x < 0) {
      return -x; // returns the negative of x if x is less than 0
    }
    return x; // returns x if x is greater than or equal to 0
  }
  
  console.log(absoluteValue(-5)); // logs 5 to the console
  console.log(absoluteValue(5)); // logs 5 to the console
  /** 
   * In the above example, the absoluteValue function takes a single parameter x and returns the absolute value of x. 
   * If x is less than 0, the function returns the negative of x. 
   * Otherwise, it returns x. 
   * The two return statements in the function ensure that only one of the possible return values is ever returned.
  */

  // Finally, it's important to note that if a function does not have a return statement, 
  // it still returns a value to the caller. 
  // In this case, the return value is undefined. 
  // For example:
  function greet(name) {
    console.log("Hello, " + name + "!"); // logs a greeting to the console
  }
  
  const result1 = greet("Alice"); // calls the greet function, which logs a greeting to the console
  console.log(result1); // logs undefined to the console
  
  