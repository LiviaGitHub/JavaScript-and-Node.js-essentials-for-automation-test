/**
 * Conditional statements use cases:
 * 1. if
 * 2. if (!)
 * 3. if and else
 * 
 */

// Use case 1: if... else

let avocado = 'fruit';

if(avocado === 'fruit'){
    console.log('Yes, It is a fruit'); 
} else (avocado === "letuce");{
    console.log('No, It is not a fruit'); 
};

// Use case 2: If... else

let age = 18;

if(age >= 18){
    console.log('Yes, Can getting in'); 
} else {
    console.log('No, Cannot getting in'); 
};

// Use case 3: if... else (Nested conditions... Act based on lits conditions)
// In this example, the code first checks if the weather is "sunny". 
// If it is, it checks if the temperature is greater than 25. 
// If both conditions are met, the code outputs "It's hot and sunny! Time to hit the beach.". 
// If the temperature is not greater than 25, the code outputs "It's sunny but not too hot.
// Perfect weather for a picnic.". If the weather is not "sunny", the code checks if it is "rainy" or "cloudy", 
// and outputs the appropriate message. If none of the conditions are met, the code outputs "Unknown weather condition. 
// Better check the forecast.".

let weather = "sunny";
let temperature = 30;

if (weather === "sunny") {
  if (temperature > 25) {
    console.log("It's hot and sunny! Time to hit the beach.");
  } else {
    console.log("It's sunny but not too hot. Perfect weather for a picnic.");
  }
} else if (weather === "rainy") {
  console.log("It's raining. Better stay indoors.");
} else if (weather === "cloudy") {
  console.log("It's cloudy. A good day for a walk in the park.");
} else {
  console.log("Unknown weather condition. Better check the forecast.");
}

// Use case 4: if... else
// Nested conditions in JavaScript refer to using multiple "if-else" statements within each other. 
// This allows for complex logic to be implemented in the code, 
// where different actions can be taken depending on multiple conditions being met.

if (condition1) {
      // code to be executed if condition1 is true
    if (condition2) {
      // code to be executed if both condition1 and condition2 are true
    } else {
      // code to be executed if condition1 is true but condition2 is false
    }
  } else {
      // code to be executed if condition1 is false
  }
  
// Use case 5: if (!)
// In JavaScript, the "!" operator is used to negate a boolean expression. 
// This can be useful in an "if" statement to check if a condition is not met.
let number = 10;

if (!(number > 20)) {
  console.log("The number is not greater than 20.");
} else {
  console.log("The number is greater than 20.");
}

// Use case 6: if...else Inner condition
// An inner condition in JavaScript is a conditional statement that is placed inside another conditional statement. 
// It allows for multiple levels of conditions to be checked, making the code more complex but also more flexible. 
// The inner condition only gets executed if the outer condition is true.
// For example, you can use an inner condition to check for multiple conditions that depend on each other. 
// In the inner condition, you can use the if...else statement to determine what action should be taken based on the result of the evaluation.
// 
// In this example, the inner condition if (x === 10) will only be executed if x < y is true.
let x = 10;
let y = 20;

if (x < y) {
  if (x === 10) {
    console.log("x is 10");
  } else {
    console.log("x is not 10");
  }
} else {
  console.log("x is not less than y");
}


// Use case 7: if in loops
// In this example, the if statement is used in a for loop to check if each element in the numbers array is even or odd.
// The loop iterates through each element in the array and checks if it is divisible by 2 using the modulus operator (%). 
// If the result is 0, then the number is even, and the if block is executed. 
// If the result is not 0, then the number is odd, and the else block is executed.
//
// Output: 
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + " is even");
  } else {
    console.log(numbers[i] + " is odd");
  }
}

// Use case 8: switch case
// The switch statement in JavaScript provides an alternative way to execute different blocks of code based on multiple conditions. 
// It is often used when you have a series of conditions and each condition should lead to a different result.
// The switch statement takes an expression as an input and compares its value to the values specified in each case clause.
// If a match is found, the code block associated with that case is executed. 
// If no match is found, the code in the default clause (if specified) is executed.
//
// Output: Today is Sunday
// In this example, the switch statement takes the value of the day variable 
// as its expression and compares it to the values specified in each case clause. 
// If a match is found (i.e., day is equal to "Sunday"), 
// the code block associated with that case is executed (console.log("Today is Sunday")). 
// If no match is found, the code in the default clause is executed (console.log("Invalid day")).
let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}
