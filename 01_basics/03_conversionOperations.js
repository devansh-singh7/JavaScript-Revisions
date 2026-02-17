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

// ************ Operations ************


let value = 3;
let negv = -value;
console.log(negv); // -3



let str1 = "Hello!!";
let str2 = " Devansh Singh";

let str3 = str1 + str2;
console.log(str3);  // Hello!! Devansh


console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "3"); // 33


console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

