// In JavaScript, you can use a for...in loop to iterate over the properties of an object. 
// Here's an example:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  for (const prop in person) {
    console.log(prop + ': ' + person[prop]);
  }
  // Output:
  // firstName: John
  // lastName: Doe
  // age: 30

// In this example, we have an object person with three properties: firstName, lastName, and age. 
// We use a for...in loop to iterate over each property of the object.
// The syntax of the for...in loop is as follows: 

for (const variable in object) {
    // code to be executed
}

// In each iteration of the loop, the variable is assigned the name of a property of the object. 
// We can then use this variable to access the value of the property using object[variable].
// In this example, we log the name and value of each property to the console using string concatenation. 
// The output shows the name of each property (firstName, lastName, and age) followed by its value (John, Doe, and 30).
  