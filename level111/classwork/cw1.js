// 1)let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     city: "Tbilisi",
//     departments: 4,
//     budget: 120000,
//     active: true,
//     projects: 8
// };

// შენი დავალებაა, გამოიყენო Object.keys() და Object.values() და შეასრულო შემდეგი მოთხოვნები:
// 1. მიიღე ობიექტის ყველა გასაღები და შეინახე ცალკე მასივში.
// 2. მიიღე ობიექტის ყველა მნიშვნელობა და შეინახე სხვა მასივში.
// 3. დაბეჭდე გასაღებების რაოდენობა.
// 4. დაბეჭდე მნიშვნელობების რაოდენობა.
// 5. დაბეჭდე ყველა გასაღები ცალ-ცალკე, for...of ციკლის გამოყენებით.
// 6. დაბეჭდე ყველა მნიშვნელობა ცალ-ცალკე, for...of ციკლის გამოყენებით.
// 7. შექმენი ახალი მასივი, რომელშიც მოხვდება მხოლოდ ის მნიშვნელობები, რომლებიც ტიპით არის number. გამოიყენეთ filter
// 8. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი და დაბეჭდე შედეგი.


let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    city: "Tbilisi",
    departments: 4,
    budget: 120000,
    active: true,
    projects: 8
}

let newList = Object.keys(company)
let newList1 = Object.values(company)

console.log(newList)
console.log(newList1)

console.log(newList.length)
console.log(newList1.length)

for (let i in newList) {
    console.log(newList[i])
}

for (let i in newList1) {
    console.log(newList1[i])
}

let numbers = newList1.filter(item => typeof item === "number")
console.log(numbers)

let sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum)