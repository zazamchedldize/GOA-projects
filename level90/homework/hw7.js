// 7)შექმენი username და name.

// თუ username იწყება "admin"-ით, გამოიტანე:

// Welcome, ${name}! You are an admin.

// სხვა შემთხვევაში:

// Welcome, ${name}! You are a regular user.

let username = "admin123"
let name = "zaza"

if (username.startsWith("admin")) {
    console.log(`Welcome, ${name}! You are an admin.`)
} else {
    console.log(`Welcome, ${name}! You are a regular user.`)
}
