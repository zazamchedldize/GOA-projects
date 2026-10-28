// 3)let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// };

// მოთხოვნები:
// 1. დაბეჭდე ყველა გასაღები და მნიშვნელობა.
// 2. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
// 3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
// 4. შექმენი ახალი ობიექტი numericInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.
// 5. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი.


let user = {
    username: "Goga123",
    age: 19,
    city: "Tbilisi",
    score: 450,
    active: true,
    gamesPlayed: 35
}

for (let i in user) {
    console.log(i, user[i])
}

let num = 0
let length1 = 0
let sum = 0

for (let i in user) {
    if (typeof user[i] === "number") {
        num++
    }
}

for (let i in user) {
    if (i.length > 5) {
        length1++
    }
}

let numericInfo = {}

for (let i in user) {
    if (typeof user[i] === "number") {
        numericInfo[i] = user[i]
    }
}

for (let i in numericInfo) {
    sum += numericInfo[i]
}

console.log(sum, num, length1, numericInfo)
