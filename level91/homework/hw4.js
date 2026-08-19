// 4)let username = "adminGoga";
// თუ username არის falsy → "Username is empty"
// თუ იწყება "admin"-ით → "Admin"
// თუ იწყება "user"-ით → "User"
// სხვა შემთხვევაში → "Unknown user"

// გამოიყენე .startsWith().

let username = "adminGoga"
if (!username) {
    console.log("Username is empty")
} else if (username.startsWith("admin")) {
    console.log("Admin")
} else if (username.startsWith("user")) {
    console.log("User")
} else {
    console.log("Unknown user")
}