// 10)let company = {
//     name: "TechVision",
//     employees: 45,
//     income: 120000,
//     expenses: 75000,
//     founded: 2018,
//     country: "Georgia",
//     isActive: true
// };


// Destructuring-ის გამოყენებით:
// 1. შეინახე ყველა მნიშვნელობა ცალკეულ ცვლადებში.
// 2. name შეცვალე companyName-ით.
// 3. employees შეცვალე employeeCount-ით.
// 4. income შეცვალე totalIncome-ით.
// 5. expenses შეცვალე totalExpenses-ით.
// 6. გამოთვალე კომპანიის მოგება (შემოსავალი მინუს ხარჯები).
// 7. შეამოწმე, არის თუ არა მოგება 50000-ზე მეტი.
// 8. შეამოწმე, დაარსებულია თუ არა კომპანია 2020 წლამდე.
// 9. შეამოწმე, აქტიურია თუ არა კომპანია.
// 10. გამოიტანე კომპანიის სრული ფინანსური ანგარიში.

let company = {
    name: "TechVision",
    employees: 45,
    income: 120000,
    expenses: 75000,
    founded: 2018,
    country: "Georgia",
    isActive: true
}

let {name, employees, income, expenses, founded, country, isActive} = company

let profit = income - expenses

console.log(name)
console.log(employees)
console.log(income)
console.log(expenses)
console.log(founded)
console.log(country)
console.log(isActive)

console.log("Profit:", profit)

if (profit > 50000) {
    console.log("More than50000ზე")
} else {
    console.log("Less than 50000")
}

if (founded < 2020) {
    console.log(founded)
} else {
    console.log(founded)
}

if (isActive) {
    console.log("Company is active")
} else {
    console.log("Company is not active")
}

console.log("Company:", name)
console.log("Country:", country)
console.log("Employees:", employees)
console.log("Income:", income)
console.log("Expenses:", expenses)
console.log("Profit:", profit)