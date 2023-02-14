// In JavaScript, you can use a for...of loop to iterate over the elements of an array. 
// Here's an example:

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
// Output:
// 1
// 2
// 3
// 4
// 5

// In this example, we have an array of numbers numbers. We use a for...of loop to iterate over each element of the array.
// The syntax of the for...of loop is as follows:

for (const variable of iterable) {
    // code to be executed
  }

// In each iteration of the loop, the variable is assigned the value of an element of the iterable. 
// We can then use this variable to perform some operation on the element.
// In this example, we log each element of the array to the console. 
// The output shows the values of each element (1, 2, 3, 4, and 5) on separate lines. 