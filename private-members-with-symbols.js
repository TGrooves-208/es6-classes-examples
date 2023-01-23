// Private members using symbols (ES6)
// We hide certain members of a function
// Through abstraction we only allow what is essential
// There are 3 different approaches to accomplish this
// Primitive type we can use will be approach 2 a symbol
// Approach 3 "symbol" -> it is a primitive
const _radius = Symbol(); // It is a unique identifier
// We can use this uidentifier as a property name
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // Approach 1 is more of a convention
    // this._radius = radius; // Is not hidden
    // In JS there are two ways to acess the props of an {}
    // Approach with the "." notation or
    // this['radius'] = radius; both approaches are the same
    // this.radius = radius;
    // Approach 3
    this[_radius] = radius;
  }
  // Computed property names (ES6)
  // The resulting values from 
  // the expression will be the name of the property or method
  // We get a unique value, a unique identifier and the name of the method
  [_draw]() {
    return 'This is a Symbol method that returns a string';
  }
}

const c = new Circle(5);
console.log(c);
console.table(c.Symbol)
// Returns an empty array
console.log(Object.getOwnPropertyNames(c));
console.table(Object.getOwnPropertyNames(c));
// Returns the Symbol()
console.log(Object.getOwnPropertySymbols(c));
// This gives us an index with the Values Symbol()
console.table(Object.getOwnPropertySymbols(c));
// This will give us a back an index value - not recommended
const key = Object.getOwnPropertySymbols(c) [0];
console.log(c[key]);
console.table(c[key]);

console.log(Symbol === Symbol); // True
console.log(Symbol() === Symbol()); // False

