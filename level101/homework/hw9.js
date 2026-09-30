// 9)შექმენი:

// function transform(number, operation) {

// }

// და შემდეგ ეს ოთხი ფუნქცია:

// double(number)
// square(number)
// addTen(number)
// half(number)

// transform()-მა უნდა მიიღოს რიცხვი და ფუნქცია და დააბრუნოს შესაბამისი შედეგი.

// შემდეგ შეამოწმე:

// transform(20, double)
// transform(20, square)
// transform(20, addTen)
// transform(20, half)

// დამატებითი პირობა: transform()-ში არ უნდა დაწერო არც ერთი if და არც switch



function double(number) {
    return number * 2
}

function square(number) {
    return number * number
}

function addTen(number) {
    return number + 10
}

function half(number) {
    return number / 2
}

function transform(number, operation) {
    return operation(number)
}

console.log(transform(20, double))
console.log(transform(20, square))
console.log(transform(20, addTen))
console.log(transform(20, half))