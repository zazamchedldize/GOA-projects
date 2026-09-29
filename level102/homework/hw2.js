// 2)შექმენი ფუნქცია:

// processText(text, action)

// რომელიც მიიღებს ტექსტს და მეორე არგუმენტად ფუნქციას.

// შექმენი 3 ფუნქცია:

// makeUpperCase — ტექსტი გადაიყვანოს დიდ ასოებში
// makeLowerCase — ტექსტი გადაიყვანოს პატარა ასოებში
// getLength — დააბრუნოს ტექსტის სიგრძე

// შემდეგ processText გამოიყენე სამივე ფუნქციასთან.

// მაგალითად:

// processText("JavaScript", makeUpperCase)
// processText("JavaScript", makeLowerCase)
// processText("JavaScript", getLength)

function processText(text, action) {
    return action(text)
}

function makeUpperCase(text) {
    return text.toUpperCase()
}

function makeLowerCase(text) {
    return text.toLowerCase()
}

function getLength(text) {
    return text.length
}


console.log(processText("JavaScript", makeUpperCase))
console.log(processText("JavaScript", makeLowerCase))
console.log(processText("JavaScript", getLength))