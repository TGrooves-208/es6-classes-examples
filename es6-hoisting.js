// ES6 Hoisting
// 1. We can use the function declaration syntax
// function sayHola() {} - semicolon is not needed
// 2. We can use function expression syntax
// const sayAdios = function() {}; - semicolon is needed
// There is one another main distinction between the two options
// 1. function declarations are hoisted  they are raised to the top level
// 1.1 We can call them before they are defined
// 2.1 Function expressions are not hoisted
// 2.2 We receive "Uncaught ReferenceError: method() is not defined" 
// 2.3 We cannot use identifiers before they are declared
const c = new Circle(); // Cannot access Circle before initiailization

// Class declaration
// We stick with this because it is simpler and cleaner
class Circle {

}
const s = new Square(); // Does not return an error
// Class expression
const Square = class {

};

