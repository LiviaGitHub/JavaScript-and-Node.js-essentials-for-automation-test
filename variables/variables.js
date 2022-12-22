/* 
*  var, const, let
*  variables always start with a letter, dollar ($), or underscore (_). 
*  variables are case sensitive.
*  variables needs to be unique.
*  variables cannot be named using the system keyboard. Example: let throw = "print"
*  use [let] or [const] over [var] because they support block scoping.
*/

/* 
*  Rules for [const] variable
*  [const] variable must be initialized with a value.
*  [const] variable cannot be re-assigned.
*/

// Example: variable must be initialized with a value.
const initializedWithValue = "VALUE"
console.log(initializedWithValue + 'this will WORK');

const initializedWithNoneValue
console.log(initializedWithNoneValue + 'this will NOT WORK');

// Example: variable cannot be re-assigned. 
const cannotBeReassigned = "green"
cannotBeReassigned = "pink"
console.log(cannotBeReassigned + 'this will NOT WORK');

/* 
*  Rules for [let] variable
*  [let] possible declare variables with none value.
*  [let] variable can be re-assigned.
*  [let] variable can be initialized with a number and re-assigned with a string.
*/

// Example: variable can be re-assigned. 
let letRules = "green"
letRules = "pink"
console.log(letRules + 'this will print [pink] the last value');

// Example: javascript variable can be initialized with a number and re-assigned with a string.
let number = 10
number = "string"
console.log(letRules + 'this will print [string] the last value');

// Example: possible declare variables with none value.
let noneValues
// this will print [undefined]
console.log(noneValues);