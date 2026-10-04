// 7)შექმენი ორი მოთამაშე:

// let player1 = 0;
// let player2 = 0;

// თითოეული მოთამაშისთვის შექმენი 3 შემთხვევითი რაუნდის ქულა, სადაც თითოეული ქულა არის 1-დან 10-მდე.

// მაგალითად:

// Player 1:
// რაუნდი 1 → 7
// რაუნდი 2 → 4
// რაუნდი 3 → 9

// Player 2:
// რაუნდი 1 → 6
// რაუნდი 2 → 8
// რაუნდი 3 → 5

// შემდეგ:

// დაითვალე თითოეული მოთამაშის სამი რაუნდის ჯამი.
// თუ რომელიმე რაუნდში მოთამაშემ ზუსტად 10 ქულა მიიღო, მას დამატებით 5 ბონუსი დაემატოს.
// თუ მოთამაშემ სამივე რაუნდში 5-ზე მეტი ქულა მიიღო, მას დამატებით 3 ბონუსი დაემატოს.
// საბოლოოდ შეადარე მოთამაშეების ქულები.
// გამოიტანე გამარჯვებული ან "ფრეა!"

let player1 = 0
let player2 = 0

let p1r1 = Math.floor(Math.random() * 10) + 1
let p1r2 = Math.floor(Math.random() * 10) + 1
let p1r3 = Math.floor(Math.random() * 10) + 1

let p2r1 = Math.floor(Math.random() * 10) + 1
let p2r2 = Math.floor(Math.random() * 10) + 1
let p2r3 = Math.floor(Math.random() * 10) + 1

player1 = p1r1 + p1r2 + p1r3
player2 = p2r1 + p2r2 + p2r3

if(p1r1 === 10 || p1r2 === 10 || p1r3 === 10) {
    player1 += 5
}

if(p2r1 === 10 || p2r2 === 10 || p2r3 === 10) {
    player2 += 5
}

if(p1r1 > 5 && p1r2 > 5 && p1r3 > 5) {
    player1 += 3
}

if(p2r1 > 5 && p2r2 > 5 && p2r3 > 5) {
    player2 += 3
}

console.log(player1)
console.log(player2)

if(player1 > player2) {
    console.log("Player 1-მა მოიგო!")
} else if(player2 > player1) {
    console.log("Player 2-მა მოიგო!")
} else {
    console.log("ფრეა!")
}