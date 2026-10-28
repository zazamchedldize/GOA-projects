// 1)let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// };

// მოთხოვნები:
// 1. for...in-ის გამოყენებით დაბეჭდე ყველა გასაღები და შესაბამისი მნიშვნელობა.
// 2. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
// 3. იპოვე ყველა საგნის ქულების ჯამი.
// 4. იპოვე ყველაზე დაბალი ქულა და დაბეჭდე მისი შესაბამისი საგნის სახელი.
// 5. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 70-ზე ნაკლები ქულა.


let student = {
    name: "Giorgi",
    math: 85,
    english: 92,
    physics: 74,
    chemistry: 88,
    history: 60
}

for (let i in student) {
    console.log(i, student[i])
}

let count1 = 0
let sum = 0
let min = 100
let count2 = 0
let subject = " "

for(let i in student) {
    if(i !== "name" && student[i] >= 80) {
        count1++
    }
}

for(let i in student) {
    if(i !== "name") {
        sum += student[i]
    }
}

for(let i in student) {
    if(i !== "name" && student[i] < min) {
        min = student[i]
        subject = i
    }
}

for(let i in student) {
    if(i !== "name" && student[i] <= 70) {
        count2++
    }
}

console.log(count1,count2,sum,min,subject)