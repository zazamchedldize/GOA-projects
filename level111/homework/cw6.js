// 6)let employees = {
//     Nika: 2500,
//     Ana: 3200,
//     Luka: 1800,
//     Mariam: 4000,
//     Saba: 2200,
//     Elene: 3500
// };

// მოთხოვნები:
// 1. მიიღე თანამშრომლების სახელების მასივი და ხელფასების მასივი.
// 2. დაბეჭდე თანამშრომლების საერთო რაოდენობა.
// 3. დაითვალე, რამდენი თანამშრომლის ხელფასია 3000 ლარზე მეტი.
// 4. გამოთვალე ხელფასების საშუალო არითმეტიკული.
// 5. იპოვე ყველაზე დაბალი ხელფასი.
// 6. იპოვე იმ თანამშრომლის სახელი, რომელსაც ყველაზე მაღალი ხელფასი აქვს.



let employees = {
    Nika: 2500,
    Ana: 3200,
    Luka: 1800,
    Mariam: 4000,
    Saba: 2200,
    Elene: 3500
}

let names = Object.keys(employees)
let salaries = Object.values(employees)

console.log(names)
console.log(salaries)

console.log(names.length)

let count = 0

for (let i in employees) {
    if (employees[i] > 3000) {
        count++
    }
}

console.log(count)

let sum = 0
let total = 0

for (let i in employees) {
    sum += employees[i]
    total++
}

console.log(sum / total)

let min = 5000

for (let i in employees) {
    if (employees[i] < min) {
        min = employees[i]
    }
}

console.log(min)

let max = 0
let employee = ""

for (let i in employees) {
    if (employees[i] > max) {
        max = employees[i]
        employee = i
    }
}

console.log(employee)
