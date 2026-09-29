// 1)შექმენი ფუნქცია processNumber, რომელსაც ექნება ორი პარამეტრი:

// number
// operation

// operation უნდა იყოს ფუნქცია.

// შექმენი 3 ცალკე ფუნქცია:

// double(number)
// triple(number)
// square(number)

// თითოეულმა უნდა დააბრუნოს შესაბამისი შედეგი.

// შემდეგ processNumber-ს გადასცი სხვადასხვა ფუნქცია და დაბეჭდე შედეგები.

// მაგალითად, საბოლოოდ უნდა შეგეძლოს:

// processNumber(5, double)
// processNumber(5, triple)
// processNumber(5, square)

function processNumber (number, operation) {
    return operation(number)
}

function double (number) {
    return number * 2
}

function triple(number) {
    return number * 3
}

function square(number) {
    return number * number
}


console.log(processNumber(5, double))
console.log(processNumber(5, triple))
console.log(processNumber(5, square))