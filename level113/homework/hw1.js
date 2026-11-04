// 1)
// let students = [
//     { name: "Nika", age: 17, score: 85, active: true },
//     { name: "Ana", age: 19, score: 45, active: false },
//     { name: "Giorgi", age: 21, score: 92, active: true },
//     { name: "Mariam", age: 18, score: 67, active: true },
//     { name: "Luka", age: 16, score: 38, active: false },
//     { name: "Saba", age: 20, score: 74, active: true }
// ];


// მოთხოვნები:
// 1. filter()-ის გამოყენებით შექმენი ახალი სია, სადაც მხოლოდ აქტიური სტუდენტები იქნებიან.
// 2. forEach()-ით გამოიტანე ყველა სტუდენტის სახელი და ქულა.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება სტუდენტის სახელი და მისი სტატუსი (Passed ან Failed). ჩათვალე, რომ ჩაბარების ზღვარია 50 ქულა.
// 4. findIndex()-ით იპოვე სტუდენტის ინდექსი, რომლის სახელია "Mariam".
// 5. some()-ით შეამოწმე, არსებობს თუ არა სტუდენტი, რომელსაც 90-ზე მეტი ქულა აქვს.
// 6. every()-ით შეამოწმე, ყველა სტუდენტი არის თუ არა 16 წლის ან უფროსი.


let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
]

let newList = students.filter(item => {
    return item.active === true
})

students.forEach(item => {
    console.log(item.name, item.score)
})

let newList2 = students.map(item => {
    return item.score >= 50 ? "Passed" : "Failed"
})

let index = students.findIndex(item => {
    return item.name === "Mariam"
})

let result = students.some(item => {
    return item.score > 90
})

let result2 = students.every(item => {
    return item.age >= 16
})

console.log(newList)
console.log(newList2)
console.log(index)
console.log(result)
console.log(result2)