/** 
 * In the example, we define a string str 
 * and use the slice method to extract a substring that contains the first 5 characters of the original string. 
 * The slice method takes two arguments: 
 * the start index and the end index (not inclusive) of the substring. 
 * In this case, we pass in 0 as the start index and 5 as the end index, 
 * which gives us the substring "Hello". We then log this substring to the console using console.log.
 * 
 * Note that the slice method does not modify the original string, 
 * but instead returns a new string containing the extracted substring.
*/

// 01 - example
const str = "Hello, World!";
const substring = str.slice(0, 5);

console.log(substring); // Output: "Hello"


// 02 - example
const dateStr = "2023-03-14";
const date = dateStr.slice(8, 10);

console.log(day); // Output: "14"

// 03 - example
const dayStr = "2023-03-14";
const day = dayStr.slice(2);

console.log(day); // Output: "23-03-14"