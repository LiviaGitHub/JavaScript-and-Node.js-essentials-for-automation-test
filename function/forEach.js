/** 
 * The forEach method is a built-in method in JavaScript that allows you to iterate over the elements of an array 
 * and perform a specific operation on each element.
*/

// Here's how you can use it:
const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});
// In this example, we are iterating over the array using the forEach method, 
// and for each element in the array, we are printing it to the console using the console.log method. 
// The forEach method takes a function as an argument, which is called for each element in the array. 
// The function can take up to three arguments: 
// the current element being processed, the index of the current element, and the array itself.

// You can also use arrow functions to make the code more concise:
const array2 = [1, 2, 3, 4, 5];

array2.forEach(element => console.log(element));
// This will produce the same output as the previous example.