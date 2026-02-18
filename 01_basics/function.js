// Functions

function great() {
    console.log("Hey Devansh");
}

great() // Calling of function.



// a, b, c -> Arguments
             
function add(a, b, c) {
    console.log(a + b + c);
}

add(5, 10, 50) // Parameters
add(4, 7, 1)


// Function to multiply
function multi(num1, num2) {
   // console.log(num1*num2);
   return num1*num2;
}

let ans = multi(2, 3) // 6
console.log("ANSWER IS :", ans);

// Console.log() in a function is a bad practice.
//We should always return a value from function.


function addNumbers(...numbers) { // Spread Operator.
    const sum = numbers.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber;
    }, 0);

    return sum;
}

console.log(addNumbers(3, 5)); // 8
console.log(addNumbers(1, 2, 4, 5, 7, 6, 8));  // 33


// Build a Function that count numbers of occurence in array.
function countOccurr(arr, target) {
    let count = 0;
    for (const item of arr) {
        if(item === target) {
            count++;
        }
    }
    return count;
}

console.log(countOccurr([1, 2, 2, 3, 4, 5, 2, 9, 6 ,2], 2)); // 4


