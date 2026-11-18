// 3)
// let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78];


// 1. შეინახე მოსწავლის სახელი.
// 2. შეინახე მათემატიკის ქულა და საგნის სახელი.
// 3. შეინახე ფიზიკის საგნის სახელი და ქულა.
// 4. გამოთვალე ქულების ჯამი.
// 5. გამოიტანე, რომელ საგანში მიიღო მოსწავლემ მეტი ქულა.


let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78]

let [name, mathScore, mathSubject, physicsScore, physicsSubject] = exam

let total = mathScore + physicsScore

console.log(name)
console.log(mathSubject, mathScore)
console.log(physicsSubject, physicsScore)
console.log(total)

if (mathScore > physicsScore) {
    console.log(`${mathSubject} has more points`)
} else {
    console.log(`${physicsSubject} has more points`)
}