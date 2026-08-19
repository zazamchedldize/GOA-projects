// 3)let age = 20;
// let price = 150;
// let isStudent = true;

// პირობები:

// თუ price > 100 და isStudent არის true → "30% discount"
// თუ price > 100 ან age < 18 → "20% discount"
// თუ age >= 60 → "15% discount"
// სხვა შემთხვევაში → "No discount"

let age = 20
let price = 150
let isStudent = true

if (price > 100 && isStudent == true) {
    console.log("30% discount")
} else if (price > 100 || age < 18) {
    console.log("20% discount")
} else if (age >= 60) {
    console.log("15% discount")
} else {
    console.log("No discount")
}