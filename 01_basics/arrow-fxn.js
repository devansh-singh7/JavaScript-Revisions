// Arrow Functions

// 1. Syntax OF Arrow Functions.

const sayHello = () => {
    console.log("Hello Devansh");
};

sayHello(); // Hello Devansh


const add = (a, b) => {
    return a + b;
};

console.log(add(3, 4));   // 7


// One Liner Arrow function.
// It can be used when you have only and only one statement in function.

const addV2 = (a, b) => a + b;

console.log(addV2(3, 9));  // 12 

// 2. Arguments keyword.

// Arguments keyword is not available in arrow functions.
// We haave to use spread operator to get the argumnets in arrow functions.

const addNumbers = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
};

console.log(addNumbers(10, 22, 33)); // 65

// 3. Hoisting

/* SayHello();  // Hello Devansh

function SayHello() {
    console.log("Hello Devansh");
} */

    // Sayhello();  // Hoisting is not possible in arrow functions.

    const Sayhello = () => {
        console.log("Hello Dev");   
    };

    Sayhello(); // Hello Dev

 
// 4. THis Keyword  

const obj = {
    value: 12,
    myFunction: () =>{
        console.log(this); // Gives undefined For arrow functions
     // console.log("Value is" + this);
    },
};

obj.myFunction();

// In normal function this refers to the object(obj). 
// Normal function scope is Local.

// In Arrow functions this refers to the global object/ Window Object (Browser).
// Arrow function scope is global.