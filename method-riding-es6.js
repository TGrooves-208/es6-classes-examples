// Method riding in ES6
// Method Overriding
// Is when we have a method in a base class or base object
// The goal is that we want to change the implementation
// This can be accomplish with other a derived class or derived object
// Lets say our Circle need a different consideration
class Shape {
    move() {
        console.log('Move coming from the Shape class');
    }
  }
  
  class Circle extends Shape {
    move() {
      super.move();
      console.log('Circle move different from the base implementation');
    }
  
  }
  
  const c = new Circle();
  // We can call the move method on the new Circle due to prototypical inheritance
  console.log(c.move);
  console.table(c.move()); // Will be undefined after the move() gives us the output with no "super"
  console.log(c);
  console.table(c);
  
  