// 3)შექმენი ფუნქცია:

// calculate(a, b, operation)

// რომელიც მიიღებს ორ რიცხვს და მესამე არგუმენტად ფუნქციას.

// შექმენი 4 ცალკე ფუნქცია:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// თითოეულმა შესაბამისი მათემატიკური მოქმედება უნდა შეასრულოს.

// შემდეგ გამოიყენე:

// calculate(10, 5, add)
// calculate(10, 5, subtract)
// calculate(10, 5, multiply)
// calculate(10, 5, divide)

function calculate (a,b, operation) {
    return operation(a,b)
}

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}


console.log(calculate(10, 5, add))
console.log(calculate(10, 5, subtract))
console.log(calculate(10, 5, multiply))
console.log(calculate(10, 5, divide))