// 4)let username = "adminGoga";

// ცარიელია → "Username is empty"
// იწყება "admin"-ით → "Admin"
// იწყება "user"-ით → "User"
// სხვა შემთხვევაში → "Unknown user"

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