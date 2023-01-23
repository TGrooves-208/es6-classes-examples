// Let's learn about implementating inheritance on ES6 classes
// 1. Declaring a class called Shape
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('Muevelo');
  }
}

// To inherit the Shape into the Circle we just add "extends"
class Circle extends Shape {
  // Will give an error "Must call super constructor in derived class"
  constructor(color, radius) {
    super(color); // Don't forget super as it references the parent 
    this.radius = radius;
  }
  draw() {
    console.log('Draw');
  }
}

// If no color is give the logged will be: Circle { color: undefined}
const c = new Circle('red and gold', 143);
// Output will be in the console: Circle { color: 'black and yellow', radius: 143}
console.log(c);
console.table(c.move());
console.table(c.draw());
// Outputs 
// Index: color, radius
// Values 'black and yellow', 143
console.table(c);