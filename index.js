function receivesAFunction(callback) {
    callback();
}
function sayHello() {
    console.log("Hello, world!");
}

receivesAFunction(sayHello);  // This will output: "Hello, world!"


function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
        console.log("This is the named function!");
    };
}
const myFunction = returnsANamedFunction(); // This will return the `namedFunction`
myFunction();  // This will output: "This is the named function!"


function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function!");
    };
}
const myAnonymousFunction = returnsAnAnonymousFunction(); 
myAnonymousFunction();  
