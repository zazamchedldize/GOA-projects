// 9)let user = {
//     name: "Gio",
//     age: 21
// };

// let address = {
//     city: "Tbilisi",
//     street: "Rustaveli"
// };

// let account = {
//     username: "gio21",
//     isActive: true
// };


// 1. სამივე ობიექტი გააერთიანე fullUser ობიექტში.
// 2. დაამატე role: "Admin".
// 3. შეცვალე city "Kutaisi"-თ.
// 4. შეცვალე isActive მნიშვნელობა false-ით.
// 5. დაბეჭდე საბოლოო ობიექტი.


let user = {
    name: "Gio",
    age: 21
}

let address = {
    city: "Tbilisi",
    street: "Rustaveli"
}

let account = {
    username: "gio21",
    isActive: true
}

let fullUser = {...user, ...address, ...account}

fullUser.role = "Admin"
fullUser.city = "Kutaisi"
fullUser.isActive = false

console.log(fullUser)