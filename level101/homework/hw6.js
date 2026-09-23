// 6)double(number)
// square(number)
// negative(number)

// რომლებიც შესაბამისად:

// გააორმაგებს რიცხვს
// აიყვანს კვადრატში
// გახდის უარყოფითს

// შემდეგ შექმენი:

// function processNumber(number, operation) {
    
// }

// operation უნდა იყოს ფუნქცია.

// მაგალითად:

// processNumber(5, double)
// processNumber(5, square)
// processNumber(5, negative)

// მოსალოდნელი შედეგები:

// 10
// 25
// -5


function double(number) {
    return number * 2
}

function square(number) {
    return number * number
}

function negative(number) {
    return number * -1
}


function processNumber(number, operation) {
    return operation(a,b)
}

console.log(processNumber(5, double))
console.log(processNumber(5, square))
console.log(processNumber(5, negative))