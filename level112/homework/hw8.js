// 8)let employees = [
//     { name: "Nika", department: "IT", salary: 3500, experience: 4 },
//     { name: "Ana", department: "HR", salary: 2200, experience: 2 },
//     { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
//     { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
//     { name: "Luka", department: "IT", salary: 4200, experience: 1 },
//     { name: "Elene", department: "HR", salary: 3000, experience: 4 }
// ];


// მოთხოვნები:
// 1. filter()-ით შეარჩიე IT დეპარტამენტის თანამშრომლები, რომელთა ხელფასი 2500 ლარზე მეტია.
// 2. forEach()-ით გამოიტანე თითოეული შერჩეული თანამშრომლის ინფორმაცია.
// 3. Ternary operator-ით განსაზღვრე ბონუსის სტატუსი:
//    - თუ გამოცდილება 3 ან მეტი წელია — "Bonus eligible";
//    - სხვა შემთხვევაში — "No bonus".
// 4. if/else-ის გამოყენებით დამატებით შეამოწმე ხელფასი:
//    - თუ ხელფასი 4000 ან მეტია, გამოიტანე "High salary";
//    - სხვა შემთხვევაში — "Regular salary".
// მაგალითი:
// Nika - Salary: 3500 - Bonus eligible - Regular salary
// Luka - Salary: 4200 - No bonus - High salary  


let employees = [
    { name: "Nika", department: "IT", salary: 3500, experience: 4 },
    { name: "Ana", department: "HR", salary: 2200, experience: 2 },
    { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
    { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
    { name: "Luka", department: "IT", salary: 4200, experience: 1 },
    { name: "Elene", department: "HR", salary: 3000, experience: 4 }
]

let newList = employees.filter(item => {
    return item.department === "IT" && item.salary > 2500
})

newList.forEach(item => {
    let bonus = item.experience >= 3 ? "Bonus eligible" : "No bonus"
    let salaryStatus
    if(item.salary >= 4000) {
        salaryStatus = "High salary"
    } else {
        salaryStatus = "Regular salary"
    }
    console.log(`${item.name} - Salary: ${item.salary} - ${bonus} - ${salaryStatus}`)
})
