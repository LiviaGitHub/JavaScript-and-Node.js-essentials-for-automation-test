/**
 * Loops in JavaScript allow you to repeat a block of code multiple times, until a certain condition is met. 
 * There are several types of loops in JavaScript, including:
 * 1. Standard for loop
 * 2. while
 * 3. forEach
 * 4. do while
 * 5. for in
 * 6. for of
 * 
 * Each type of loop has its own use case, and it's important to choose the appropriate one for the task at hand.
*/

/** 
 * Standard for loop
 * Remenber these points(!):
 * 1. Define the starting point
 * 2. Define end/exit condition
 * 3. Decide increment/decrement
*/
// Use case 1: [Standard for] used to execute a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Use case 2: [While loops] used to execute a block of code repeatedly until a condition is met.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Use case 5: [For...in] used to iterate over the properties of an object..
const obj = {a: 1, b: 2, c: 3};
for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}

// Use case 6: [For...of] used to iterate over the values of an iterable object, such as an array.
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
