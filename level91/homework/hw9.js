// 9)let username = "ADMIN_GOGA";
// let age = 25;
// let isActive = true;

// შექმენი პირობითი სისტემა:

// თუ username ცარიელია → "No username"
// username გადაიყვანე პატარა ასოებში
// თუ username იწყება "admin"-ით და age >= 18 და isActive არის true → "Admin access"
// თუ username იწყება "user"-ით და age >= 18 → "User access"
// თუ age < 18 → "Access denied"
// სხვა შემთხვევაში → "Unknown account"

let username = "ADMIN_GOGA"
let age = 25
let isActive = true
username = username.toLowerCase()

if (!username) {
    console.log("No username")
} else if (username.startsWith("admin") && age >= 18 && isActive) {
    console.log("Admin access")
} else if (username.startsWith("user") && age >= 18) {
    console.log("User access")
} else if (age < 18) {
    console.log("Access denied")
} else {
    console.log("Unknown account")
}