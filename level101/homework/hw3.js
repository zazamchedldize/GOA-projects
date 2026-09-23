// 3)შექმენი ორი ფუნქცია:

// multiply(a, b)
// subtract(a, b)

// პირველმა უნდა დააბრუნოს ორი რიცხვის ნამრავლი, მეორემ — სხვაობა.

// შემდეგ:

// let operation = multiply;

// გამოიყენე operation 5 და 4-ზე.

// შემდეგ შეცვალე:

// operation = subtract;

// და ისევ გამოიყენე 5 და 4-ზე.


function multiply(a, b) {
    return a * b
} 

function subtract(a, b) {
    return a - b
}

let operation = multiply
console.log(operation(5,4))

operation = subtract

console.log(operation(5,4))