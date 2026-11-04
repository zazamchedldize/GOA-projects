// 4)let employees = [
//     { name: "Gio", salary: 2500, experience: 3, department: "IT" },
//     { name: "Nino", salary: 1800, experience: 1, department: "HR" },
//     { name: "Luka", salary: 3200, experience: 5, department: "IT" },
//     { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
//     { name: "Saba", salary: 4000, experience: 7, department: "IT" },
//     { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
// ];


// მოთხოვნები:
// 1. filter()-ით მიიღე მხოლოდ IT დეპარტამენტის თანამშრომლები.
// 2. forEach()-ით გამოიტანე თითოეული თანამშრომლის სახელი და ხელფასი.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეულ თანამშრომელს ექნება სახელი და გამოცდილების მიხედვით დამატებული ბონუსი:
//    - თუ გამოცდილება 5 ან მეტია, ბონუსი არის 500.
//    - სხვა შემთხვევაში ბონუსი არის 200.
// 4. findIndex()-ით იპოვე თანამშრომელი, რომლის ხელფასი 4000-ია.
// 5. some()-ით შეამოწმე, არსებობს თუ არა თანამშრომელი, რომელსაც 6 წელზე მეტი გამოცდილება აქვს.
// 6. every()-ით შეამოწმე, ყველა თანამშრომლის ხელფასი 1000-ზე მეტია თუ არა.

let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
]

let newList = employees.filter(item => {
    return item.department === "IT"
})

employees.forEach(item => {
    console.log(item.name, item.salary)
})

let newList2 = employees.map(item => {
    return {
        name: item.name,
        bonus: item.experience >= 5 ? 500 : 200
    }
})

let index = employees.findIndex(item => {
    return item.salary === 4000
})

let result = employees.some(item => {
    return item.experience > 6
})

let result2 = employees.every(item => {
    return item.salary > 1000
})

console.log(newList)
console.log(newList2)
console.log(index)
console.log(result)
console.log(result2)