// 5)შექმენი ფუნქცია:

// addPoints(score, points = 10)

// ფუნქციამ უნდა:

// მიიღოს არსებული ქულა.
// დაამატოს points.
// დააბრუნოს ახალი ქულა.

function addPoints(score, points = 10) {
    score = score + points
    return score
}
console.log(addPoints(50))
console.log(addPoints(70, 20))
console.log(addPoints(100, 5))