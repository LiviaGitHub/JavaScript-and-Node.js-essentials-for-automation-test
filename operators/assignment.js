/**
 * Assignment operator
 * =, +=, -=, *, /=
 */

// Use case 1: Basic
let a = 1

// Use case 2: Chaining
let x = y = 1
console.log(x + " Use case 2: Chaining");
console.log(y + " Use case 2: Chaining");

// Use case 3: +=
let start = 5
for (let i = 1; i <= 10; i++){
    // start = start + i
    start += i
    console.log(start + " += operator");
}

let start2 = 5
for (let i = 1; i <= 10; i++){
    start -= i
    console.log(start + " -= operator");
}

let start3 = 5
for (let i = 1; i <= 10; i++){
    start /= i
    console.log(start + " /= operator");
}

// Use case 4: increment
for (let i = 0; i <= 10; i++){
    console.log(i + " increment");
}

// Use case 5: decrement
for (let i = 10; i >= 0; i--){
    console.log(i + " decrement");
}

// Use case 6: unary plus
console.log("3" + 3); 
// output 33