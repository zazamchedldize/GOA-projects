// 2)let students = [
//     { name: "Nika", age: 17, score: 92, attendance: 95 },
//     { name: "Mariam", age: 19, score: 68, attendance: 80 },
//     { name: "Giorgi", age: 18, score: 85, attendance: 90 },
//     { name: "Ana", age: 16, score: 45, attendance: 60 },
//     { name: "Luka", age: 20, score: 78, attendance: 88 },
//     { name: "Saba", age: 17, score: 96, attendance: 98 },
//     { name: "Elene", age: 19, score: 55, attendance: 75 },
//     { name: "Data", age: 18, score: 89, attendance: 92 }
// ];


// მოთხოვნები:
// 1. filter() მეთოდის გამოყენებით შექმენი ახალი სია, რომელშიც მოხვდებიან მხოლოდ ის სტუდენტები, რომელთა ქულა 80 ან მეტია და დასწრება 90 ან მეტია.
// 2. მიღებულ სიაზე გამოიყენე forEach() და თითოეული სტუდენტისთვის კონსოლში გამოიტანე შემდეგი ინფორმაცია:
//    - სახელი
//    - ასაკი
//    - ქულა
//    - დასწრება
// 3. თითოეული სტუდენტისთვის გამოიტანე შეტყობინება შემდეგი ფორმატით:
// Nika - Age: 17, Score: 92, Attendance: 95%


// 4. ბოლოს დაითვალე, რამდენი სტუდენტი მოხვდა გაფილტრულ სიაში



let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
]

let newList = students.filter(item => {
    return item.score >= 80 && item.attendance >= 90
})

newList.forEach(item => {
    console.log(item.name + " - Age: " + item.age + ", Score: " + item.score + ", Attendance: " + item.attendance + "%")
})

console.log("Students: " + newList.length)
