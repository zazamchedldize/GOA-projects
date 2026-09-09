// 3)შექმენი getGrade ფუნქცია Function Expression-ის გამოყენებით.

// მიიღოს score და დააბრუნოს:

// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// 0–59 → "F"

// თუ ქულა 0-ზე ნაკლებია ან 100-ზე მეტია → "Invalid score".

const getGrade = function(score) {return score >= 90 && score <= 100 ? "A" :score >= 80 && score <= 89 ? "B" :score >= 70 && score <= 79 ? "C" :score >= 60 && score <= 69 ? "D" :score >= 0 && score <= 59 ? "F" :"Invalid score";
}