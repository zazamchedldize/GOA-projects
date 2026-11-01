// 10)10)let athletes = [
//     { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
//     { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
//     { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
//     { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
//     { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
//     { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
//     { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
//     { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
// ];


// მოთხოვნები:
// 1. filter()-ით შეარჩიე სპორტსმენები, რომლებიც ცურვაში ("Swimming") მონაწილეობენ და აქვთ მინიმუმ 4 მედალი.
// 2. forEach()-ით გამოიტანე თითოეული შერჩეული სპორტსმენის სახელი, ასაკი, მედლების რაოდენობა და ქულა.
// 3. Ternary operator-ით განსაზღვრე შედეგი:
//    - თუ ქულა 90 ან მეტია — "Excellent";
//    - თუ ქულა 80 ან მეტია — "Good";
//    - სხვა შემთხვევაში — "Needs improvement".
//    ამისთვის გამოიყენე ჩაშენებული ternary operator.
// 4. if/else-ით შეამოწმე, აქვს თუ არა სპორტსმენს 5 ან მეტი მედალი. შესაბამისი შეტყობინება გამოიტანე.
// 5. forEach()-ის შიგნით ცვლადში დააგროვე ყველა გაფილტრული სპორტსმენის ქულების ჯამი.
// 6. ბოლოს გამოიტანე:
//    - გაფილტრული სპორტსმენების რაოდენობა;
//    - მათი ქულების ჯამი.



let athletes = [
    { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
    { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
    { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
    { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
    { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
    { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
    { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
    { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
]

let newList = athletes.filter(item => {
    return item.sport === "Swimming" && item.medals >= 4
})

let sum = 0

newList.forEach(item => {
    let result = item.score >= 90 ? "Excellent" : item.score >= 80 ? "Good" : "Needs improvement"
    let medalStatus
    if(item.medals >= 5) {
        medalStatus = "Has 5 or more medals"
    } else {
        medalStatus = "Has less than 5 medals"
    }
    console.log(`${item.name} - Age: ${item.age} - Medals: ${item.medals} - Score: ${item.score} - ${result} - ${medalStatus}`)
    sum += item.score
})

console.log(newList.length)
console.log(sum)
