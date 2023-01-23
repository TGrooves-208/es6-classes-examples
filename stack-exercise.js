// Stack implementation with ES6 Classes
// Data Structures
// Push to add, Pop to remove
// Stacks cannot be targetted by index
// We use pop to accomplish this
// The stack will have the following three methods
// Peek: Returns the object on top of the Stack
// Push: To Add Something
// Pop: To Remove something
const _items = new WeakMap();
class Stack {
  // Let's create an array that is private
  constructor() {
    _items.set(this, []);
  }
  // Push will always add an object to the end of the array
  push(obj) {
    _items.get(this).push(obj);
  }
  // Pop removes the object at the end of the array
  pop() {
    const items = _items.get(this); // Setting the expression to the new const
    if (items.length === 0)
      throw new Error("Stack is currently empty! - called from the pop()");

    return items.pop();
  }
  // Peek
  peek() {
    const items = _items.get(this);
    // For check to see if the stack is empty
    if (items.length === 0)
      throw new Error("Stack is currently empty - called with the peek()!");

    return items[items.length - 1];
  }
  // Let's define a getter for the count
  get count() {
    const items = _items.get(this);
    return items.length;
  }
}

const stack = new Stack();
console.log(stack);
stack
stack.push('1');
stack.push('2');
stack.push('3');
console.log(stack.count);
console.log(stack.pop());
console.log(stack.count);
console.log(stack.peek());
console.log(stack.count);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.count);
console.log(stack.pop());














