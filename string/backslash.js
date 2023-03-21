/**
 * In JavaScript, you can use the backslash (\) character to escape characters in a string. 
 * When you use a backslash before a character, 
 * it tells JavaScript that the character that follows should be treated differently 
 * than it would be if it appeared normally in the string. 
*/

// 01 example: 
// To use a single quote (') or double quote (") within a string that is delimited by the same type of quote, 
// you can use a backslash to escape it:
 
const str1 = "She said, \"Hello, how are you?\"";
// output: "She said, "Hello, how are you?""
// reason: The backslash character is used to escape the double quotes (") 
// that appear within the string. 
// When the string is printed or used in code, 
// the backslashes are not included and the double quotes are interpreted as part of the string. 
// So the output is a string containing the text "She said, " followed by "Hello, how are you?" 
// and ending with another double quote.

const str2 = 'He replied, \'I\'m doing well, thank you.\'';

// 02 example: 
// To use a backslash itself within a string, you need to escape it with another backslash:

const str3 = "The path is C:\\Documents\\Files\\";

// 03 example: 
// You can also use a backslash to represent special characters such as newlines (\n), 
// tabs (\t), and carriage returns (\r):

const str4 = "First line\nSecond line";
const str5 = "Name:\tJohn\tDoe\nAge:\t25";

// In summary, the backslash character is used to escape characters within a string in JavaScript.