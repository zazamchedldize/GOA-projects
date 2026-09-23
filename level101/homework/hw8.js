// 8)მოცემულია:

// let price = 200;

// შექმენი სამი ფუნქცია:

// discount(price)
// tax(price)
// shipping(price)

// ფუნქციებმა უნდა გააკეთონ:

// discount → 20-ით შეამციროს ფასი
// tax → 18 დაუმატოს
// shipping → 30 დაუმატოს

// შემდეგ შექმენი:

// function processPrice(price, operation) {

// }

// გამოიყენე სამივე ფუნქცია ცალ-ცალკე.

// მაგალითად:

// processPrice(price, discount)
// processPrice(price, tax)
// processPrice(price, shipping)


let price = 200

function discount(price) {
    return price -= 20
}

function tax(price) {
    return price += 18
}

function shipping(price) {
    return price += 30
}


function processPrice(price, operation) {
    return operation(price)
}


console.log(processPrice(price, discount))
console.log(processPrice(price, tax))
console.log(processPrice(price, shipping))