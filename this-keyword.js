// We will take a closer look at the keyword "this"
// ES6 example on the usage of "this"
// 1. Let's declare a constructor function
// Using strict mode gives us error checking
// It fails silently and helps to determine undefined
// 'use strict'; 
// Usage of strict ensures we don't define the global object
// Sets the this.draw to undefined no longer pointing to the global object
const Circle = function() {
    this.draw = function() {
      return console.log(this + ' This is pointing to the new Circle'); // This points to the new Circle object
    }
  };
  
  const c1 = Circle(); // This points to the global window object
  const c = new Circle(); // Is pointing Here: 1 "this"
  console.log(c.draw);
  console.table(c)
  
  // Let's get a reference to a new draw const
  // Reference and stored in const draw
  const draw = c.draw;
  // This is called a method call because we are calling
  // A method on the object -> Points to Here: 1 -
  c.draw(); // Points to the object
  // This is called a function call
  // We are calling this like a standalone function
  draw(); // This points to the global object
  console.log(draw);
  
  // This code example demonstrates the defaults for strict
  // The bodies of our classes are executed in strict mode
  class CircleNonStrict {
    drawNS() {
      return console.log(this + 'By default the body is executed in strict mode');
    }
  }
  
  const cNonStrict = new CircleNonStrict();
  const drawNS = cNonStrict.drawNS;
  drawNS();
  
  console.log(drawNS);
  console.table(drawNS());