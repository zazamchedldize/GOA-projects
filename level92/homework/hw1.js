// 1)let score = 87;

// Ternary operator-ის გამოყენებით გამოიტანე:

// 90-100 → "Excellent"
// 75-89 → "Very Good"
// 60-74 → "Good"
// 40-59 → "Passed"
// 0-39 → "Failed"

let score = 87

score >= 90 && score <= 100 ? console.log("Excellent") : score >= 75 && score <= 89 ? console.log("Very Good") : score >= 60 && score <= 74 ? console.log("Good") : score >= 40 && score <= 59 ? console.log("Passed") : score >= 0 && score <= 39 ? console.log("Failed") : console.log("Invalid score")