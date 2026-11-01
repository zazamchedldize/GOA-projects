// 1)let employees = [
//     { name: "Giorgi", salary: 2500, department: "IT" },
//     { name: "Nino", salary: 1800, department: "HR" },
//     { name: "David", salary: 3200, department: "IT" },
//     { name: "Maka", salary: 1500, department: "Sales" },
//     { name: "Saba", salary: 2800, department: "Sales" }
// ];


// 1. გამოიტანეთ ყველა თანამშრომლის სახელი და ხელფასი.
// 2. გამოიტანეთ მხოლოდ IT განყოფილების თანამშრომლები.
// 3. გამოიტანეთ იმ თანამშრომლების სახელები, რომელთა ხელფასი 2000-ზე მეტია.
// 4. დაითვალეთ, რამდენი თანამშრომელია Sales განყოფილებაში.
// 5. გამოთვალეთ ყველა თანამშრომლის ხელფასების ჯამი.


let employees = [
    { name: "Giorgi", salary: 2500, department: "IT" },
    { name: "Nino", salary: 1800, department: "HR" },
    { name: "David", salary: 3200, department: "IT" },
    { name: "Maka", salary: 1500, department: "Sales" },
    { name: "Saba", salary: 2800, department: "Sales" }
]

let count = 0
let sum = 0

employees.forEach(item => {
    console.log(item.name, item.salary)
    if(item.department === "IT") {
        console.log(item)
    } if(item.salary > 2000) {
        console.log(item.name)
    } if(item.department === "Sales") {
        count++
    }

    sum += item.salary
})

console.log(count,sum)