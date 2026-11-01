// )let students = [
//     { name: "Nika", score: 95, attendance: 92 },
//     { name: "Mariam", score: 65, attendance: 85 },
//     { name: "Giorgi", score: 82, attendance: 70 },
//     { name: "Ana", score: 45, attendance: 95 },
//     { name: "Luka", score: 90, attendance: 88 },
//     { name: "Elene", score: 75, attendance: 96 }
// ];


// მოთხოვნები:
// 1. filter()-ით შეარჩიე სტუდენტები, რომელთა ქულა 70 ან მეტია.
// 2. forEach()-ით თითოეული სტუდენტისთვის გამოიტანე სახელი და ქულა.
// 3. Ternary operator-ით განსაზღვრე შედეგი:
//    - თუ ქულა 90 ან მეტია — "Excellent";
//    - სხვა შემთხვევაში — "Passed".
// 4. მეორე ternary operator-ით განსაზღვრე დასწრების სტატუსი:
//    - თუ დასწრება 90 ან მეტია — "Good attendance";
//    - სხვა შემთხვევაში — "Low attendance".
// 5. გამოიტანე ყველა ინფორმაცია ერთ შეტყობინებაში.
// მაგალითი:
// Nika - Score: 95 - Excellent - Good attendance
// Giorgi - Score: 82 - Passed - Low attendance



let students = [
    { name: "Nika", score: 95, attendance: 92 },
    { name: "Mariam", score: 65, attendance: 85 },
    { name: "Giorgi", score: 82, attendance: 70 },
    { name: "Ana", score: 45, attendance: 95 },
    { name: "Luka", score: 90, attendance: 88 },
    { name: "Elene", score: 75, attendance: 96 }
]

let newList = students.filter(item => {
    return item.score >= 70
})

newList.forEach(item => {
    let result = item.score >= 90 ? "Excellent" : "Passed"
    let attendanceResult = item.attendance >= 90 ? "Good attendance" : "Low attendance"
    console.log(`${item.name} - Score: ${item.score} - ${result} - ${attendanceResult}`)
})
