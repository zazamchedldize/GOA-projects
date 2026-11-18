// 3)let student = {
//     name: "Nika",
//     age: 17,
//     grade: 11,
//     scores: [90, 85, 95]
// };


// დავალება:
// 1. Object Destructuring-ის გამოყენებით შეინახეთ name, age და scores ცვლადებში.
// 2. Array Destructuring-ის გამოყენებით scores მასივიდან შეინახეთ სამივე ქულა ცალკე ცვლადში.
// 3. კონსოლში გამოიტანეთ მოსწავლის სახელი, ასაკი და თითოეული ქულა.
// 4. გამოიტანეთ ქულების ჯამი.

let student = {
    name: "Nika",
    age: 17,
    grade: 11,
    scores: [90, 85, 95]
}

let {name, age, scores} = student

let [score1, score2, score3] = scores

console.log(name)
console.log(age)

console.log(score1)
console.log(score2)
console.log(score3)

let sum = score1 + score2 + score3

console.log(sum)