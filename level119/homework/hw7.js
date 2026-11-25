// 7)let personalInfo = {
//     name: "Ana",
//     age: 19
// };

// let contactInfo = {
//     email: "ana@gmail.com",
//     phone: "555123456"
// };


// 1. გააერთიანე ორივე ობიექტი ახალ ობიექტში user.
// 2. დაამატე city: "Batumi".
// 3. შეცვალე age 20-ით.
// 4. დაბეჭდე მიღებული ობიექტი.


let personalInfo = {
    name: "Ana",
    age: 19
}

let contactInfo = {
    email: "ana@gmail.com",
    phone: "555123456"
}

let user = {...personalInfo, ...contactInfo}

user.city = "Batumi"
user.age = 20

console.log(user)