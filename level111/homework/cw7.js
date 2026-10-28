// 7)let user = {
//     username: "Shadow123",
//     age: 21,
//     city: "Tbilisi",
//     score: 750,
//     active: true,
//     gamesPlayed: 45,
//     premium: false
// };

// მოთხოვნები:
// 1. Object.keys()-ით მიიღე ყველა გასაღები.
// 2. Object.values()-ით მიიღე ყველა მნიშვნელობა.
// 3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
// 4. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
// 5. დაითვალე, რამდენი მნიშვნელობაა ტიპით boolean.
// 6. შექმენი ახალი ობიექტი numberInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.



let user = {
    username: "Shadow123",
    age: 21,
    city: "Tbilisi",
    score: 750,
    active: true,
    gamesPlayed: 45,
    premium: false
}

let keys = Object.keys(user)
let values = Object.values(user)

console.log(keys)
console.log(values)

let count1 = 0

for (let i in user) {
    if (i.length > 5) {
        count1++
    }
}

console.log(count1)

let count2 = 0

for (let i in user) {
    if (typeof user[i] === "number") {
        count2++
    }
}

console.log(count2)

let count3 = 0

for (let i in user) {
    if (typeof user[i] === "boolean") {
        count3++
    }
}

console.log(count3)

let numberInfo = {}

for (let i in user) {
    if (typeof user[i] === "number") {
        numberInfo[i] = user[i]
    }
}

console.log(numberInfo)
