// 2)let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// მოთხოვნები:
// 1. დაბეჭდე ყველა პროდუქტის სახელი და ფასი.
// 2. დაითვალე, რამდენი პროდუქტი ღირს 500 ლარზე მეტი.
// 3. იპოვე ყველა პროდუქტის საერთო ღირებულება.
// 4. იპოვე ყველაზე ძვირადღირებული პროდუქტი და მისი ფასი.
// 5. შექმენი ახალი ცარიელი ობიექტი expensiveProducts და for...in-ის გამოყენებით დაამატე მასში მხოლოდ ის პროდუქტები, რომელთა ფასიც 500 ლარზე მეტია.


let products = {
    laptop: 2500,
    phone: 1800,
    headphones: 250,
    keyboard: 150,
    monitor: 900,
    mouse: 80
}
let count = 0
let sum = 0
let max = 0
let product = " "

for(let i in products) {
    console.log(i, products[i])
}

for(let i in products) {
    if(products[i] > 500) {
        count++
    }
}

for(let i in products) {
    sum += products[i]
}

for(let i in products) {
    if(products[i] > max) {
        max = products[i]
        product = i
    } 
}


let expensiveProducts = {

}

for(let i in products) {
    if(products[i] > 500) {
        expensiveProducts[i] = products[i]
    }
}

console.log(expensiveProducts)