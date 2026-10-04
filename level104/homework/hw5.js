// 5)let player1 = ...
// let player2 = ...

// თითოეულ მოთამაშეს უნდა ჰქონდეს შემთხვევითი ძალა 10-დან 30-მდე.

// შემდეგ თითოეულ მოთამაშეს შეუქმენი შემთხვევითი დაცვის ქულა 1-დან 10-მდე:

// Player 1 → ძალა + დაცვა
// Player 2 → ძალა + დაცვა

// მოთამაშის საბოლოო საბრძოლო ქულა უნდა გამოითვალოს ასე:

// ძალა + დაცვა

// მაგრამ არის სპეციალური წესები:

// თუ მოთამაშის ძალა ზუსტად 20 აღმოჩნდა → დაემატოს 5 ქულა.
// თუ დაცვის ქულა 10 აღმოჩნდა → დაემატოს კიდევ 3 ქულა.

// ამის შემდეგ შეადარე ორივე მოთამაშის საბოლოო საბრძოლო ქულა და გამოავლინე გამარჯვებული.

// თუ საბოლოო ქულები თანაბარია → "ფრეა!"


let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10
let defense1 = Math.floor(Math.random() * 10) + 1
let defense2 = Math.floor(Math.random() * 10) + 1

let score1 = player1 + defense1
let score2 = player2 + defense2

if(player1 === 20) {
    score1 += 5
}

if(player2 === 20) {
    score2 += 5
}

if(defense1 === 10) {
    score1 += 3
}

if(defense2 === 10) {
    score2 += 3
}

console.log(score1)
console.log(score2)

if(score1 > score2) {
    console.log("Player 1-მა მოიგო!")
} else if(score2 > score1) {
    console.log("Player 2-მა მოიგო!")
} else {
    console.log("ფრეა!")
}