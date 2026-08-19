// 8)let username = "User123";
// თუ username falsy არის → "Empty"
// თუ იწყება "admin"-ით და სიგრძე 10-ზე მეტია → "Strong admin username"
// თუ იწყება "user"-ით → "Regular user"
// თუ სიგრძე 5-ზე ნაკლებია → "Too short"
// სხვა შემთხვევაში → "Valid username"


let username = "User123"
username = username.toLowerCase()

if (!username) {
    console.log("Empty")
} else if (username.startsWith("admin") && username.length > 10) {
    console.log("Strong admin username")
} else if (username.startsWith("user")) {
    console.log("Regular user")
} else if (username.length < 5) {
    console.log("Too short")
} else {
    console.log("Valid username")
}