/**
 * In JavaScript, a callback function is a function that is passed as an argument to another function 
 * and is executed by that function at a later time or after some event has occurred.
 * A callback function is often used to handle asynchronous operations, 
 * such as making an HTTP request or waiting for a user event, 
 * because it allows the program to continue executing while waiting for the asynchronous operation to complete.
 * 
 */

// Here's an example of using a callback function to handle the completion of an asynchronous operation:
function fetchData(callback) {
    // simulate an asynchronous operation
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      callback(data);
    }, 2000);
  }
  
  fetchData((data) => {
    console.log(data); // { name: "John", age: 30 }
  });
  // In this example, the fetchData function simulates an asynchronous operation using the setTimeout function. 
  // When the operation completes, it calls the callback function passed as an argument, 
  // passing the result of the operation as an argument to the callback.
  // The callback function is defined inline as an arrow function in this example, 
  // but it could be defined separately as a named function as well.

  // asynchronous operation
  // In JavaScript is an operation that does not block the execution of the program while it is running. 
  // Instead, it runs in the background, allowing the program to continue executing while the operation is being performed. 
  // Asynchronous operations are typically used for tasks that take a long time to complete 
  // or that involve waiting for external resources to become available, such as making a network request or reading from a file.
  // One of the key features of JavaScript is its support for asynchronous programming through the use of callbacks, 
  // promises, and async/await syntax. These mechanisms allow developers to write code that appears to be synchronous, 
  // but that actually runs asynchronously under the hood.

// Here's an example of using asynchronous operations to make a network request using the fetch function:
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// In this example, the fetch function returns a promise that resolves with a Response object representing the HTTP response from the server. 
// We use the .then method to handle the response, converting it to JSON and logging the result to the console. 
// The .catch method is used to handle any errors that may occur during the network request.
// By using promises and chaining .then and .catch methods, we can write asynchronous code in a way that looks and feels synchronous, 
// while still allowing the program to continue executing while the network request is being made.