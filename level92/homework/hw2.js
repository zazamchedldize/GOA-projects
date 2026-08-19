// 2)let age = 20;
// let isStudent = true;

// Nested ternary-ის გამოყენებით განსაზღვრე:

// თუ ასაკი 18-ზე ნაკლებია → "Minor"
// თუ ასაკი 18 ან მეტია და სტუდენტია → "Adult Student"
// თუ ასაკი 18 ან მეტია და სტუდენტი არ არის → "Adult"
// თუ ასაკი 65 ან მეტია → "Senior"

let age = 70
let isStudent = true

age < 18 ? console.log("Minor"): age >= 65 ? console.log("Senior"): isStudent ? console.log("Adult Student"): console.log("Adult")