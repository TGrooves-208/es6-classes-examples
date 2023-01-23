// Weak maps are a new type in ES6
// We want to turn the radius property into a private propety
// WeakMaps are dictionaries where keys are object and values 
// Can be anything -> WeakMaps give us a garbage collection
// 
const _radius = new WeakMap();
const _move = new WeakMap();
// An approach that still exists
// const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    // Older approach
    // privateProps.set(this, {
    //   radius: radius,
    //   move: () => {

    //   }
    // });
    // privateProps.get(this).radius;
    _radius.set(this, radius);
    // Using a function as the value will return undefined
    // To get around this we can use an arrow function
    // _move.set(this, function() {
    //   console.log('move', this)
    // })
    // this will inherit what is in the constructor
    _move.set(this, () =>  {
      console.log('move', this)
    })
  }

  draw() {
    // This will return the value of the radius property
    // console.log(_radius.get(this));
    _move.get(this)();
    console.log('draw')
  }
}

const c = new Circle(123);
console.log(c.draw);
// This will give in the console: move Circle {}
// Symbols will give an index but aren't visible
console.table(c.draw()) 
