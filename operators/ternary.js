/** 
 * Ternary operator (?)
 * @syntax:
 * <expression> ? "val1" : "val2"
 * 
 * A ternary operator is a shorthand way of writing an if-else statement. 
 * It has the form x ? y : z and is equivalent to if x: y else: z. x is a condition 
 * that is evaluated as either True or False. 
 * If x is True, then y is returned, otherwise z is returned. 
*/

// Use case: Set log level for different run environment
// Basic level

let runner = "Chromer"
let defaultBrowser = runner === "Chromer" ? "Firefox" : "Error"
console.log(defaultBrowser); // returns Firefox

let runner2 = "Test"
let defaultBrowser2 = runner2 === "Chromer" ? "Firefox" : "Error"
// defaultBrowser2 is not equal to runner2
console.log(defaultBrowser); // returns Error

// Advanced use