// 5)let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"];

// slice()-ის გამოყენებით შექმენი:

// პირველი 3 პროდუქტის ახალი მასივი.
// ბოლო 3 პროდუქტის ახალი მასივი.
// "Phone"-დან "Watch"-მდე პროდუქტების ახალი მასივი.

// მთავარი პირობა: ორიგინალი products არ უნდა შეიცვალოს.

let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"]
let newProducts = products.slice(0, 3)
let newProducts2 = products.slice(3)
let newProducts3 = products.slice(1, 4)

console.log(newProducts)
console.log(newProducts2)
console.log(newProducts3)