// 7)let account = {
//     username: "DarkKnight",
//     password: "abc12345",
//     followers: 2500,
//     following: 430,
//     posts: 85,
//     verified: false,
//     email: "dark@gmail.com",
//     country: "Georgia",
//     theme: "dark",
//     notifications: true,
//     accountType: "personal"
// };


// ყველა მოქმედება შეასრულე მოცემული თანმიმდევრობით:
// 1. username, followers, email და accountType გამოიტანე bracket notation-ით.
// 2. username შეცვალე "NightWolf"-ით bracket notation-ის გამოყენებით.
// 3. password შეცვალე "secure9876"-ით bracket notation-ის გამოყენებით.
// 4. followers შეცვალე 5000-ით dot notation-ის გამოყენებით.
// 5. following შეცვალე 600-ით bracket notation-ით.
// 6. დაამატე likes მნიშვნელობით 12000 bracket notation-ით.
// 7. დაამატე bio მნიშვნელობით "JavaScript Developer" dot notation-ით.
// 8. დაამატე isPrivate მნიშვნელობით false bracket notation-ით.
// 9. წაშალე country bracket notation-ის გამოყენებით.
// 10. წაშალე notifications dot notation-ის გამოყენებით.
// 11. verified შეცვალე true-ით bracket notation-ის გამოყენებით.
// 12. theme შეცვალე "light"-ით bracket notation-ის გამოყენებით.
// 13. წაშალე accountType bracket notation-ის გამოყენებით.
// 14. დაამატე website მნიშვნელობით "mywebsite.com" bracket notation-ით.
// 15. გამოიტანე username, followers, likes, bio, isPrivate და website.
// 16. დაბეჭდე საბოლოო ობიექტი.


let account = {
    username: "DarkKnight",
    password: "abc12345",
    followers: 2500,
    following: 430,
    posts: 85,
    verified: false,
    email: "dark@gmail.com",
    country: "Georgia",
    theme: "dark",
    notifications: true,
    accountType: "personal"
}

console.log(account["username"])
console.log(account["followers"])
console.log(account["email"])
console.log(account["accountType"])

account["username"] = "NightWolf"
account["password"] = "secure9876"

account.followers = 5000

account["following"] = 600

account["likes"] = 12000

account.bio = "JavaScript Developer"

account["isPrivate"] = false

delete account["country"]

delete account.notifications

account["verified"] = true
account["theme"] = "light"

delete account["accountType"]

account["website"] = "mywebsite.com"

console.log(account["username"])
console.log(account["followers"])
console.log(account["likes"])
console.log(account["bio"])
console.log(account["isPrivate"])
console.log(account["website"])

console.log(account)