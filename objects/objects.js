/**
 * In JavaScript, there are multiple ways to create objects. Let's explore some of the common approaches:
 * 
 * Object literal: is a way to define and create objects using a concise syntax. 
 * It allows you to define properties and methods directly within the object declaration, 
 * making it a convenient way to create simple objects on the fly.
 * 
 * Constructor function: is a special type of function that is used to create and initialize objects. 
 * It serves as a blueprint or template for creating multiple objects with similar properties and methods.
 */

// Object Literal:
// In this example, person is an object created using object literal syntax. 
// It has three properties: name with the value "John", age with the value 30, 
// and greet with a function as its value. 
// The greet function can be called using person.greet().
const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello!");
    }
  };

person.greet();
  
// Constructor Function:
// To define a constructor function, you use the function keyword with an uppercase name convention 
// (by convention, constructor functions start with a capital letter). 
// Inside the constructor function, 
// you use the this keyword to refer to the current instance of the object being created. 
// You can add properties and methods to the object using this.propertyName and this.methodName
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log("Hello!");
    };
  }
// To create a new object using the constructor function, 
// you use the new keyword followed by the function name and pass any required arguments:
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

// Object.create() method:
const person3 = Object.create(null);
person3.name = "John";
person3.age = 30;
person3.greet = function() {
  console.log("Hello!");
};

// ES6 Classes:
class Person4 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Hello!");
    }
  }
  
  const person4 = new Person4("John", 30);
  