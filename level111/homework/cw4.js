// 4)let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// };

// მოთხოვნები:
// 1. for...in-ის გამოყენებით დაბეჭდე თითოეული მოსწავლის სახელი და ქულა.
// 2. თუ მოსწავლის ქულა 70 ან მეტია, დაბეჭდე "ჩააბარა", სხვა შემთხვევაში — "ვერ ჩააბარა".
// 3. დაითვალე ჩაბარებული და ვერჩაბარებული მოსწავლეების რაოდენობა.
// 4. იპოვე ყველაზე მაღალი ქულა და იმ მოსწავლის სახელი, რომელმაც ეს ქულა მიიღო.
// 5. გამოთვალე ყველა მოსწავლის ქულების საშუალო არითმეტიკული.


let exam = {
    Nika: 95,
    Ana: 68,
    Giorgi: 82,
    Mariam: 45,
    Luka: 73,
    Saba: 30,
    Elene: 88
}

let passed = 0
let failed = 0
let max = 0
let student = ""
let sum = 0
let count = 0

for (let i in exam) {
    console.log(i, exam[i])

    if (exam[i] >= 70) {
        console.log("ჩააბარა")
        passed++
    } else {
        console.log("ვერ ჩააბარა")
        failed++
    }
}

for (let i in exam) {
    if (exam[i] > max) {
        max = exam[i]
        student = i
    }
}

for (let i in exam) {
    sum += exam[i]
    count++
}

console.log(passed)
console.log(failed)
console.log(max)
console.log(student)
console.log(sum / count)
