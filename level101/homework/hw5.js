// 5)function calculate(a, b, operation) {
//     // აქ უნდა გამოიყენო operation
// }

// ასევე შექმენი:

// add(a, b)
// multiply(a, b)

// calculate()-ს გადასცი სხვადასხვა ფუნქცია რომელიც უნდა გახდეს operation პარამეტრის მნშვნელობა.

// მაგალითად:

// calculate(5, 3, add)
// calculate(5, 3, multiply)

// შედეგი უნდა იყოს:

// 8
// 15


function calculate(a, b, operation) {
    return operation(a, b)
}

function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

console.log(calculate(5, 3, add))
console.log(calculate(5, 3, multiply))