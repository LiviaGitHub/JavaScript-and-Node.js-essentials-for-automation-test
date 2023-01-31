/**
 * Conditional statements use cases:
 * 1. if
 * 2. if (!)
 * 3. if and else
 * 
 */

// Use case 1: If... else
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

// Use case 3: If... else (Nested conditions... Act based on lits conditions)
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

// Use case 4: If... else
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
