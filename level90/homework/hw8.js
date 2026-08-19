// 9)შექმენი name და username.

// თუ username იწყება "teacher"-ით:
// Hello ${name}, you are a teacher.

// სხვა შემთხვევაში:
// Hello ${name}, you are a student.

let name = "zaza"
let username = "asdahsy7324"

if (username.startsWith("teacher")) {
    console.log(`Hello ${name}, you are a teacher`)
} else {
    console.log(`Hello ${name}, you are a student`)
}