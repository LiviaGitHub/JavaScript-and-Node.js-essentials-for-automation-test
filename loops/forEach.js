// Here's an example of how to use the forEach() method in JavaScript:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10

// In this example, we have an array of numbers numbers. 
// We call the forEach() method on the numbers array and pass in a callback function as an argument. 
// The forEach() method calls this callback function for each element of the array.
// The callback function takes one argument, which is the current element of the array being processed. 
// In this case, we've named it number. Inside the callback function, we log number * 2 to the console.
// The forEach() method is a convenient way to iterate over arrays in JavaScript, 
// without having to worry about managing loop counters or dealing with for or while loops.