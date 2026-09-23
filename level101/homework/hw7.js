// 7)შექმენი სამი ფუნქცია:

// passed(score)
// failed(score)

// passed უნდა დააბრუნოს:

// "Student passed"

// ხოლო failed:

// "Student failed"

// შემდეგ შექმენი:

// function showResult(score, resultFunction) {

// }

// resultFunction უნდა იყოს ფუნქცია, რომელსაც შენ გადასცემ.

// გამოიყენე:

// showResult(90, passed)
// showResult(40, failed)

function passed(score) {
    return " Student passed"
}

function failed(score) {
    return "Student failed"
}

function showResults(score, resultFunction) {
    return resultFunction(score)
}

console.log(showResults(90, passed))
console.log(showResults(40, failed))