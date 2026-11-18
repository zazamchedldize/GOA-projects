// 2)let products = ["Laptop", 2500, "Electronics", 15, true];


// Destructuring-ის გამოყენებით:
// 1. შეინახე პროდუქტის სახელი.
// 2. გამოტოვე ფასი.
// 3. შეინახე კატეგორია.
// 4. გამოტოვე რაოდენობა.
// 5. შეინახე ბოლო მნიშვნელობა.
// 6. შეამოწმე, არის თუ არა პროდუქტი ხელმისაწვდომი.


let products = ["Laptop", 2500, "Electronics", 15, true]

let [name, , category, , available] = products

console.log(name)
console.log(category)
console.log(available)

if (available) {
    console.log("Available")
}