/**
 * Use of break statements
 */

// This code creates an array browser containing the values "Google", "Amazon", and "Youtube". 
// It then uses a for loop to iterate through the array, assigning each value to a new variable browser within the loop.
// If the value of browser is equal to "Amazon", the break statement is executed, and the loop is terminated.
// Otherwise, the value of browser is printed to the console using console.log().
// Therefore, this code will output "Google" to the console, 
// since the loop terminates before reaching the "Youtube" element of the array.

// @scenario
// Example 1: Switch to a specific browser
let browser = ["Google", "Amazon", "Youtube"]
for (let i = 0; i < browser.lenght; i++) {
    let browser = browser[i]
    if (browser === "Amazon"){
        break
    }
    console.log(browser);
}

// @scenario
// Example 2: Using break in a for loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    console.log('Found 5!');
    break; // terminate the loop once the number 5 is found
  }
  console.log(numbers[i]);
}
// Output:
// 1
// 2
// 3
// 4
// Found 5!
// Break is used to terminate the for loop once the number 5 is found.

// Example 3: Using break in a switch statement
const fruit = 'banana';

switch (fruit) {
  case 'apple':
    console.log('This is an apple');
    break;
  case 'banana':
    console.log('This is a banana');
    break; // terminate the switch statement once 'banana' is found
  case 'orange':
    console.log('This is an orange');
    break;
  default:
    console.log('Unknown fruit');
}
// Output:
// This is a banana
// break is used to terminate the switch statement once the case for 'banana' is found.
