// 8)let company = {
//     marketing: 12000,
//     development: 35000,
//     design: 9000,
//     support: 7000,
//     sales: 18000,
//     research: 15000
// };

// მოთხოვნები:
// 1. მიიღე განყოფილებების სახელების მასივი და ბიუჯეტების მასივი.
// 2. გამოთვალე კომპანიის მთლიანი ბიუჯეტი.
// 3. დაითვალე, რამდენ განყოფილებას აქვს 15000 ლარი ან მეტი.
// 4. იპოვე ყველაზე დიდი ბიუჯეტის მქონე განყოფილება.
// 5. იპოვე ყველაზე პატარა ბიუჯეტის მქონე განყოფილება.


let company = {
    marketing: 12000,
    development: 35000,
    design: 9000,
    support: 7000,
    sales: 18000,
    research: 15000
}

let names = Object.keys(company)
let budgets = Object.values(company)

console.log(names)
console.log(budgets)

let sum = 0

for (let i in company) {
    sum += company[i]
}

console.log(sum)

let count = 0

for (let i in company) {
    if (company[i] >= 15000) {
        count++
    }
}

console.log(count)

let max = 0
let maxDepartment = ""

for (let i in company) {
    if (company[i] > max) {
        max = company[i]
        maxDepartment = i
    }
}

console.log(maxDepartment)
console.log(max)

let min = 100000
let minDepartment = ""

for (let i in company) {
    if (company[i] < min) {
        min = company[i]
        minDepartment = i
    }
}

console.log(minDepartment)
console.log(min)
