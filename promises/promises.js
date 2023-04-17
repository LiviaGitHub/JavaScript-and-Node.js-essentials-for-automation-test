/**  
 * In JavaScript, Promises are a way to handle asynchronous operations. 
 * Promises represent a value that may not be available yet, but will be at some point in the future. 
 * They are objects that represent the eventual completion or failure of an asynchronous operation 
 * and allow you to handle the result of that operation once it's available.
 * 
 * A Promise has three states: pending, fulfilled, or rejected. 
 * Initially, a Promise is in the pending state. 
 * When the asynchronous operation completes successfully, the Promise is fulfilled with the result of that operation. 
 * If the operation fails, the Promise is rejected with an error.
 * 
 * Promises provide a way to handle asynchronous code in a more elegant and readable way than traditional callback functions. 
 * They allow you to chain multiple asynchronous operations together and handle errors in a centralized way. 
 * Promises are now widely used in modern JavaScript and are supported in all major browsers.
 * 
*/

// In JavaScript, you can create a new Promise object using the Promise constructor. 
// The Promise constructor takes a function with two parameters, resolve and reject, 
// that are used to resolve or reject the Promise.
// Here's an example of how to initialize a Promise object:
const promise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation, such as fetching data from a server
    const data = fetchDataFromServer();
  
    if (data) {
      // If the operation is successful, resolve the Promise with the data
      resolve(data);
    } else {
      // If the operation fails, reject the Promise with an error message
      reject("Error fetching data from server");
    }
  });

// In the above example, we're initializing a Promise object that performs an asynchronous operation of fetching data from a server. 
// If the operation is successful, we resolve the Promise with the data returned from the server. 
// If the operation fails, we reject the Promise with an error message.
// Once the Promise is initialized, 
// you can attach a then() method to handle the fulfillment of the Promise or a catch() method to handle the rejection of the Promise:
promise.then((data) => {
    // Handle the data returned from the Promise
  }).catch((error) => {
    // Handle the error returned from the Promise
  });

// Note that Promises are asynchronous and non-blocking, 
// so any code that needs to execute after the Promise is fulfilled or rejected should be included in the then() or catch() 
// method or chained to them using additional then() methods.  
  

// Promise chaining is a way of chaining multiple asynchronous operations together in a sequence. 
// In JavaScript, you can chain Promises using the then() method, 
// which returns a new Promise that can be chained with another then() method.
// Here's an example of Promise chaining in JavaScript:

function fetchUserData() {
    return fetch('https://example.com/user')
      .then(response => response.json())
      .then(user => {
        // Get the user's ID
        const userId = user.id;
  
        // Fetch the user's posts
        return fetch(`https://example.com/posts?userId=${userId}`);
      })
      .then(response => response.json())
      .then(posts => {
        // Handle the user's posts
        console.log(posts);
      })
      .catch(error => {
        // Handle errors if any of the Promises in the chain fail
        console.error(error);
      });
  }
  
  fetchUserData();
  
// In the above example, we have a function called fetchUserData() that fetches user data from 'https://example.com/user'.
// Once the user data is received, we extract the user's ID and use it to fetch the user's posts from 'https://example.com/posts'. 
// Once the user's posts are received, we handle them in the last then() method.
// Note that each then() method returns a new Promise that can be chained with another then() method. 
// This allows us to chain multiple asynchronous operations together in a sequence. 
// If any of the Promises in the chain fail, we can handle the error in the catch() method at the end of the chain.