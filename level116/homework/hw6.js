// 6)მოცემულია ობიექტი:
// let student = {
//     name: "Goga",
//     surname: "Chalauri",
//     age: 19,
//     city: "Tbilisi",
//     score: 95
// };


// Destructuring-ის გამოყენებით:
// 1. შეინახე ყველა თვისების მნიშვნელობა ცალკეულ ცვლადებში.
// 2. name შეინახე ცვლადში სახელად studentName.
// 3. score შეინახე ცვლადში სახელად studentScore.
// 4. გამოიტანე სრული სახელი და ასაკი.
// 5. შეამოწმე, არის თუ არა სტუდენტის ქულა 90-ზე მეტი.


let student = {
    name: "Goga",
    surname: "Chalauri",
    age: 19,
    city: "Tbilisi",
    score: 95
}

let {name: studentName, surname, age, city, score: studentScore} = student

console.log(studentName, surname, age, city, studentScore)

console.log(`${studentName} ${surname} is ${age} years old`)

if (studentScore > 90) {
    console.log("Valid")
}