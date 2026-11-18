// 7)let company = {
//     name: "TechVision",
//     address: "Tbilisi",
//     employees: [
//         {
//             fullName: "Giorgi",
//             position: "Developer",
//             details: [25, 3000, "Frontend"]
//         },
//         {
//             fullName: "Nika",
//             position: "Designer",
//             details: [23, 2500, "UI/UX"]
//         },
//         {
//             fullName: "Ana",
//             position: "Manager",
//             details: [28, 4000, "Management"]
//         }
//     ],
//     departments: ["Development", "Design", "Management"]
// };


// დავალება:
// 1. Object Destructuring-ით მიიღეთ კომპანიის სახელი, მისამართი, თანამშრომლები და დეპარტამენტები.
// 2. Array Destructuring-ით მიიღეთ სამივე დეპარტამენტის სახელი.
// 3. პირველი თანამშრომლის ობიექტიდან Object Destructuring-ით მიიღეთ fullName, position და details.
// 4. details მასივიდან Array Destructuring-ით მიიღეთ ასაკი, ხელფასი და სპეციალიზაცია.
// 5. იგივე გააკეთეთ მეორე თანამშრომლისთვის.
// 6. გამოიტანეთ ორივე თანამშრომლის სრული ინფორმაცია.
// 7. შეამოწმეთ, რომელი თანამშრომლის ხელფასია მეტი.
// 8. თუ რომელიმე თანამშრომლის ხელფასი 3000-ზე მეტია, გამოიტანეთ მისი სახელი და "High Salary".

let company = {
    name: "TechVision",
    address: "Tbilisi",
    employees: [
        {
            fullName: "Giorgi",
            position: "Developer",
            details: [25, 3000, "Frontend"]
        },
        {
            fullName: "Nika",
            position: "Designer",
            details: [23, 2500, "UI/UX"]
        },
        {
            fullName: "Ana",
            position: "Manager",
            details: [28, 4000, "Management"]
        }
    ],
    departments: ["Development", "Design", "Management"]
}

let {name, address, employees, departments} = company
let [department1, department2, department3] = departments
let {fullName: name1, position: position1, details: details1} = employees[0]
let [age1, salary1, specialization1] = details1
let {fullName: name2, position: position2, details: details2} = employees[1]
let [age2, salary2, specialization2] = details2

console.log(name)
console.log(address)
console.log(department1)
console.log(department2)
console.log(department3)
console.log(name1)
console.log(position1)
console.log(age1)
console.log(salary1)
console.log(specialization1)
console.log(name2)
console.log(position2)
console.log(age2)
console.log(salary2)
console.log(specialization2)

if (salary1 > salary2) {
    console.log(name1 + " has a higher salary")
} else if (salary2 > salary1) {
    console.log(name2 + " has a higher salary")
} else {
    console.log("Both have equal salaries")
}

if (salary1 > 3000) {
    console.log(name1 + " - High Salary")
}

if (salary2 > 3000) {
    console.log(name2 + " - High Salary")
}