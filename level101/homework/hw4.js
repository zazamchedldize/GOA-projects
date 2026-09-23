// 4)შექმენი სამი ფუნქცია:

// add(a, b)
// subtract(a, b)
// multiply(a, b)

// შემდეგ შექმენი ცვლადი:

// let operation;

// მას თავდაპირველად მიანიჭე add.

// გამოიძახე operation(20, 5).

// შემდეგ operation გადააკეთე multiply ფუნქციად და იგივე რიცხვებზე ისევ გამოიძახე.

// ბოლოს operation გადააკეთე subtract ფუნქციად.

// შედეგები უნდა იყოს:

// 25
// 100
// 15


function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

let operation = add

console.log(operation(20,5))

operation = subtract
console.log(operation(20,5))

operation = multiply
console.log(operation(20,5))