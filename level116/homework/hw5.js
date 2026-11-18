// 5)let company = [
//     "TechVision",
//     [
//         "Development",
//         ["Giorgi", "Nika", "Saba"],
//         35000
//     ],
//     [
//         "Marketing",
//         ["Ana", "Mariam"],
//         12000
//     ]
// ];


// 1. შეინახე კომპანიის სახელი.
// 2. შეინახე Development დეპარტამენტის სახელი.
// 3. შეინახე მისი პირველი და მესამე თანამშრომელი.
// 4. შეინახე Development-ის ბიუჯეტი.
// 5. შეინახე Marketing-ის სახელი და თანამშრომლების სახელები.
// 6. გამოთვალე ორივე დეპარტამენტის ბიუჯეტების ჯამი.
// 7. შეადარე დეპარტამენტების ბიუჯეტები.

let company = [
    "TechVision",
    [
        "Development",
        ["Giorgi", "Nika", "Saba"],
        35000
    ],
    [
        "Marketing",
        ["Ana", "Mariam"],
        12000
    ]
]

let [companyName, [department1, [firstEmployee, secondEmployee, thirdEmployee], developmentBudget], [department2, marketingEmployees, marketingBudget]] = company

console.log(companyName)
console.log(department1)
console.log(firstEmployee, thirdEmployee)
console.log(developmentBudget)
console.log(department2, marketingEmployees)

let totalBudget = developmentBudget + marketingBudget

console.log(totalBudget)

if (developmentBudget > marketingBudget) {
    console.log("Development has a bigger budget")
} else {
    console.log("Marketing has a bigger budget")
}