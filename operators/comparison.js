/**
 * Comparison operator
 * 1. == [checks only the value]
 * 2. === [strick equality operator: value + type]
 * 3. != [inequality operator]
 * 4. !== [strict inequality operator]
 * 5. >
 * 6. >=
 * 7. <
 * 8. <=
 * @returns boolean
 * 
 * @rules:
 * In most caees, if the two operands are not of the same type,
 * JS attemps to convert them to an appropriate type for the comparison.
 * This behavior generaly results in comparing the operands numerically.
 * 
 */

// Use case 1: (===, ==)

let a = "1" // string type
let b = 1 // number type

console.log(a == b); // returns true [because the value is equal]
console.log(a === b); // returns false [because the type is not the same]

let c = 1 // number type
let d = 1 // number type

console.log(c === d); // returns true [because the value and the type are equal]

// Use case 2: (!=, !==)
// They are used to compare two values and return a Boolean indicating whether they are equal or not.

let x = 5;
let y = "5";

console.log(x != y);  // returns false
console.log(x !== y); // returns true