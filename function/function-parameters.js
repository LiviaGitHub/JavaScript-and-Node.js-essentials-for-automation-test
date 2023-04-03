/**
 * Function parameter
 * @scenario
 * Default parameter
 * Passing undefined parameter
 * Passing primitive, object type as arg
 */

// example 01: Default parameter
// In this example, the function greet takes a single parameter called name. 
// When the function is called with an argument,
// it prints out a greeting message that includes the name passed in as the argument.
// When we call greet("John"), the output will be "Hello, John!". 
// Similarly, when we call greet("Mary"), the output will be "Hello, Mary!". 
// The value of the parameter name changes depending on what argument is passed in when the function is called.
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John"); // Output: Hello, John!
  greet("Mary"); // Output: Hello, Mary!
  
// example 02: Passing undefined parameter
// In this example, the function printName takes three parameters: firstName, lastName, and middleName. 
// When the function is called with arguments, 
// it prints out a greeting message that includes the name passed in as the arguments.
// However, if the middleName parameter is not passed in when the function is called, it will be undefined. 
// So we need to check whether the middleName parameter is undefined or not, 
// and then print out the greeting message accordingly.
// When we call printName("John", "Doe"), the output will be "Hello, John Doe". 
// Since we didn't pass in a value for middleName, it is undefined, 
// and the first branch of the if statement is executed.
// When we call printName("Mary", "Smith", "Jane"), the output will be "Hello, Mary Jane Smith". 
//Since we passed in a value for middleName, it is not undefined, 
// and the second branch of the if statement is executed.
  function printName(firstName, lastName, middleName) {
    if (middleName === undefined) {
      console.log("Hello, " + firstName + " " + lastName);
    } else {
      console.log("Hello, " + firstName + " " + middleName + " " + lastName);
    }
  }
  
  printName("John", "Doe"); // Output: Hello, John Doe
  printName("Mary", "Smith", "Jane"); // Output: Hello, Mary Jane Smith
  
// example 03: Passing primitive, object type as arg  
// In this example, the function increment takes two parameters: number and object. 
// number is a primitive type (a number), while object is an object type (an object with a value property).
// When the function is called with arguments, it increments both number and the value property of object by 1. 
// However, when the function returns, the value of myNumber (which is a primitive) remains unchanged outside the function, 
// while the value of myObject (which is an object) is modified.
// In the example above, we declare two variables myNumber and myObject. 
// We then pass these variables as arguments to the increment function. 
// After the function call, we print the values of myNumber and myObject again, to see whether they have changed or not.
// As expected, the value of myNumber remains unchanged, 
// since it is a primitive type and the function modifies a copy of the value. 
// On the other hand, the value of myObject has been modified, 
// since it is an object type and the function modifies the original object.
function increment(number, object) {
    number++;
    object.value++;
  }
  
  let myNumber = 10;
  let myObject = { value: 20 };
  
  console.log("Before function call: myNumber =", myNumber, ", myObject =", myObject);
  // Output: Before function call: myNumber = 10, myObject = { value: 20 }
  
  increment(myNumber, myObject);
  
  console.log("After function call: myNumber =", myNumber, ", myObject =", myObject);
  // Output: After function call: myNumber = 10, myObject = { value: 21 }
  