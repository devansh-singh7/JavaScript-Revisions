let score = undefined;

// const {score} = req.body
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Number
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "devansh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
// "" => false;
// "devansh" => true

let someNum = 33

let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof(stringNum));