// 2)let books = [
//     { title: "Harry Potter", price: 35, pages: 320 },
//     { title: "The Hobbit", price: 28, pages: 280 },
//     { title: "Atomic Habits", price: 45, pages: 250 },
//     { title: "The Alchemist", price: 20, pages: 190 },
//     { title: "Clean Code", price: 55, pages: 450 }
// ];


// 1. გამოიტანეთ ყველა წიგნის სათაური.
// 2. გამოიტანეთ იმ წიგნების სათაურები, რომელთა ფასი 30-ზე ნაკლებია.
// 3. გამოიტანეთ იმ წიგნების სათაურები, რომელთა გვერდების რაოდენობა 300-ზე მეტია.
// 4. დაითვალეთ, რამდენი წიგნია 40-ზე ძვირი.
// 5. გამოთვალეთ ყველა წიგნის ფასების ჯამი.
// 6. შექმენით ცარიელი მასივი longBooks და დაამატეთ წიგნები, რომლებსაც 300-ზე მეტი გვერდი აქვთ.


let books = [
    { title: "Harry Potter", price: 35, pages: 320 },
    { title: "The Hobbit", price: 28, pages: 280 },
    { title: "Atomic Habits", price: 45, pages: 250 },
    { title: "The Alchemist", price: 20, pages: 190 },
    { title: "Clean Code", price: 55, pages: 450 }
]

let count = 0
let sum = 0
let longBooks = []

books.forEach(item => {
    console.log(item.title)
    if(item.price < 30) {
        console.log(item.title)
    } if(item.pages > 300) {
        console.log(item.title)
        longBooks.push(item)
    } if(item.price > 40) {
        count++
    }
    sum += item.price
})

console.log(count,sum)