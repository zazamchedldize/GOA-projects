// 5)let password = "JavaScript";
// თუ password falsy არის → "Password is empty"
// თუ სიგრძე 6-ზე ნაკლებია → "Too short"
// თუ სიგრძე 6–10-ის ფარგლებშია → "Medium password"
// თუ 10-ზე მეტია → "Strong password"

let password = 'JavaScript'

if (!password) {
    console.log("Password is empty")
} else if (password.length < 6) {
    console.log("Too short")
} else if (password.length >= 6 && password.length < 10) {
    console.log("Medium password")
} else if (password.length >= 10) {
    console.log("Strong password")
}