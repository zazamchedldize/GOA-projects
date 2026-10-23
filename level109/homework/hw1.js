// 1)მოცემულია ობიექტი:
// let user = {
//     username: "Shadow",
//     age: 19,
//     email: "shadow@gmail.com",
//     city: "Tbilisi",
//     status: "active"
// };


// შეასრულე შემდეგი მოქმედებები:
// 1. გამოიტანე მომხმარებლის სახელი, ასაკი და ქალაქი.
// 2. შეცვალე username და მიანიჭე "DarkKnight".
// 3. შეცვალე მომხმარებლის ასაკი და მიანიჭე 21.
// 4. დაამატე ახალი თვისება phone, რომლის მნიშვნელობა იქნება "555123456".
// 5. წაშალე email თვისება.
// 6. დაამატე თვისება isVerified მნიშვნელობით true.
// 7. შეცვალე status და მიანიჭე "premium".
// 8. ბოლოს გამოიტანე განახლებული ობიექტი.


let user = {
    username: "Shadow",
    age: 19,
    email: "shadow@gmail.com",
    city: "Tbilisi",
    status: "active"
}

console.log(user.username)
console.log(user.age)
console.log(user.city)

user.username = "DarkKnight"
user.age = 21

user.phone = "555123456"

delete user.email

user.isVerified = true

user.status = "premium"

console.log(user)