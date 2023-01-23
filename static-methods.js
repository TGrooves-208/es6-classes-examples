// Static Methods
// There are two types of methods
// 1. Instance methods
// 2. Static methods
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method because it is available on the instance
  // of a class, which is an object. 
  draw() {

  }

  // Static method
  static parse(str = "this is some fake json") {
    // This can be a JSON string that will be parsed
    // This won't be available on a Circle object
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(1); 
// Creates an instance of Circle
// Will have an index of radius
// Will have the Value of 1 that is the parameter which is required
console.log(circle);
console.table(circle);

// Static methods (Not available on the object instance)
// This type of methods are available on the class itself
// This is what is used to create utilitiy functions
// These functions are not specific to a given object
// Available on the class reference
const circle1 = Circle.parse('{ "radius": 1}');
console.log(circle1);
console.table(circle1);

// Example with the Math object
// With this we have the abd method available on the Math2 class
// Check by entering Math2. this will allow us to see if it exists
class Math2 {
  static abs(value) {
    // .... does some stuff
    return 'This will take some input and return something';
  }
}

// This will take some input and it will return something
Math2.abs()
console.log(Math2);
console.table(Math2);