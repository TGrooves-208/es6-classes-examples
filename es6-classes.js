// ES6 Classes are syntactical sugar over prototypical inheritance
// Classes in ES6 enforce the "new" operator
// Not like C# or Java
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('drawing in a non ES6 implementation')
//     }
// }

// This is called the body of this class
// In this body we can define properties and methods
class Circle {
    // This is used to initialize our objects
    // We pass the radius parameter in the contructor
    constructor(radius) {
      // Set the radius property on the new object instance that is created
      this.radius = radius;
      this.move = function() {
        return 'This is how you avoid adding the method on the prototype';
      }
    }
    // To define a method need to add it to the body no function keyword is needed
    draw() {
      console.log('draw')
    }
  }
  
  // If you don't want a method to be defined on the prototype
  // Then we define it on the constructor
  const c = new Circle(1);
  console.log(c);
  console.table(c);
  console.log(typeof(Circle))
  