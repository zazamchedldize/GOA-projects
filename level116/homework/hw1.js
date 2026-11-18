// 1)let student = ["Goga", "Chalauri", 19, "Tbilisi", 95];


// Destructuring-ის გამოყენებით:
// 1. ცალკე ცვლადებში შეინახე სახელი, გვარი, ასაკი, ქალაქი და ქულა.
// 2. გამოიტანე სტუდენტის სრული სახელი.
// 3. შეამოწმე, არის თუ არა სტუდენტის ქულა 90-ზე მეტი.
// 4. გამოიტანე წინადადება:
// Goga Chalauri is 19 years old and has 95 points.


let student = ["Goga", "Chalauri", 19, "Tbilisi", 95];

let [name,surname,age,city,score] = student

console.log(`${name} ${surname}`)

if(score > 90) {
    console.log("Valid")
}

console.log(`${name} ${surname} is ${age} years old and has ${score} points.`)