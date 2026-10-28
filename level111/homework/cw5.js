// 5)let student = {
//     math: 85,
//     english: 92,
//     physics: 67,
//     chemistry: 78,
//     history: 55,
//     biology: 90
// };

// მოთხოვნები:
// 1. Object.keys()-ის გამოყენებით მიიღე ყველა საგნის სახელი და შეინახე ცალკე მასივში.
// 2. Object.values()-ის გამოყენებით მიიღე ყველა ქულა და შეინახე სხვა მასივში.
// 3. დაბეჭდე საგნების რაოდენობა.
// 4. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
// 5. გამოთვალე ყველა ქულის ჯამი.
// 6. იპოვე ყველაზე მაღალი ქულა და დაბეჭდე შესაბამისი საგნის სახელიც.



let student = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
}

let subjects = Object.keys(student)
let grades = Object.values(student)

console.log(subjects)
console.log(grades)

console.log(subjects.length)

let count = 0

for (let i in student) {
    if (student[i] >= 80) {
        count++
    }
}

console.log(count)

let sum = 0

for (let i in student) {
    sum += student[i]
}

console.log(sum)

let max = 0
let subject = ""

for (let i in student) {
    if (student[i] > max) {
        max = student[i]
        subject = i
    }
}

console.log(max)
console.log(subject)
