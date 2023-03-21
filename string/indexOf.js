/**
 * The indexOf() method is a built-in method in JavaScript 
 * that allows you to search for a substring within a string and returns the index of the first occurrence of the substring. 
 * If the substring is not found, it returns -1.
 */

// Here is the basic syntax of the indexOf() method:
string.indexOf(searchValue, fromIndex)

// string: The string to search within.
// searchValue: The substring to search for within the string.
// fromIndex (optional): The index from which the search should begin. 
// If this parameter is not specified, the search will start from the beginning of the string.

// Example:

const str = "Hello World!";
console.log(str.indexOf("o")); // Output: 4

// In the example above, 
// the indexOf() method is used to find the first occurrence of the letter "o" in the string "Hello World!". 
// The method returns the index of the first occurrence, which is 4.
