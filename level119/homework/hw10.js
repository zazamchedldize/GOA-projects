// 10)let employee = {
//     firstName: "Nika",
//     lastName: "Beridze",
//     age: 25,
//     salary: 3000,
//     department: "Marketing",
//     position: "Junior"
// };

// let promotion = {
//     salary: 4500,
//     position: "Senior",
//     department: "Development"
// };

// let additionalInfo = {
//     experience: 5,
//     isActive: true
// };


// შეასრულე შემდეგი მოქმედებები:
// 1. შექმენი ახალი ობიექტი updatedEmployee.
// 2. მასში გააერთიანე სამივე ობიექტი Spread Operator-ის გამოყენებით.
// 3. განახლებული თანამშრომლის ხელფასი უნდა იყოს 4500.
// 4. განყოფილება უნდა იყოს "Development".
// 5. პოზიცია უნდა იყოს "Senior".
// 6. დაამატე ახალი property country: "Georgia".
// 7. საწყისი ობიექტები არ უნდა შეიცვალოს.


let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    age: 25,
    salary: 3000,
    department: "Marketing",
    position: "Junior"
}

let promotion = {
    salary: 4500,
    position: "Senior",
    department: "Development"
}

let additionalInfo = {
    experience: 5,
    isActive: true
}

let updatedEmployee = {...employee, ...promotion, ...additionalInfo}

updatedEmployee.country = "Georgia"

console.log(updatedEmployee)