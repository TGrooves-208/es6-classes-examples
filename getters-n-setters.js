const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  // Perhaps we only want a read function
  // Example: 1
  // So we rename the function
  // getRadius() {
  //   return _radius.get(this);
  // }
  // Looks like a method but we can access it like a property
  // Example: 2
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Radius needs to be a number');
    // This is reference now our WeakMap
    _radius.set(this, value);
  }
}

const c = new Circle(111)

// This is ok but we can only see the value if we use the "getRadius()"
// Example: 1
// console.log(c.getRadius()); // Returns 111

// Example: 2
console.log(c.radius); // Returns 111 as expected
console.log(c.radius = -1); // Throws an error "Radius needs to be a number"

