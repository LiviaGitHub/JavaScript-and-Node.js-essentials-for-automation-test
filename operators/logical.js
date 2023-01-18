/**
 * Logical Operator
 * 1. && [logical AND] operator indicates whether both operands are true.
 * 2. || [OR]
 * 3. !
 * 
 * Two main purposes:
 * 1. In conditional statements (e.gh if... else ...)
 * 2. To have a default value.
 */

// Use case 1: AND (&&) check if given val is a text.

let val = "monday"
if (typeof val === "string" && val.length >= 1){
    console.log(`value: ${val} is valid string`);
} else {
    console.log(`value: ${val} is NOT valid string`);
}

let val1 = 10
if (typeof val === "string" && val1.length >= 1){
    console.log(`value: ${val1} is valid string`);
} else {
    console.log(`value: ${val1} is NOT valid string`);
}

// Use case 2: OR operator ||.

let val2 = "Sunday"
if (val2 === "Monday" || val2 === "Sunday"){
    console.log(`value: ${val2} is a week day`); // result
} else {
    console.log(`value: ${val2} is NOT a week day`);
}

let val3 = "Sunday"
if (val3 === "Sunday" || val3 === 10){
    console.log(`value: ${val3} is a week day`); // result
} else {
    console.log(`value: ${val3} is NOT a week day`);
}