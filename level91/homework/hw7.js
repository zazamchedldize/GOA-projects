// 7)let age = 19;
// let isStudent = true;
// თუ ასაკი 18-ზე ნაკლებია → "Minor"
// თუ ასაკი 18 ან მეტია და სტუდენტია → "Adult student"
// თუ ასაკი 18 ან მეტია მაგრამ სტუდენტი არ არის → "Adult"
// თუ ასაკი არასწორია → "Invalid age"

// გამოიყენე && და !

let age = 19
let isStudent = true

if (age < 18) {
    console.log("Minor")
} else if (age >= 18 && isStudent) {
    console.log("Adult student")
} else if (age >= 18 && !isStudent) {
    console.log("Adult")
} else {
    console.log("Invalid age")
}