// 2)let products = [
//     { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
//     { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
//     { name: "Book", price: 40, stock: 12, category: "Education" },
//     { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
//     { name: "Notebook", price: 15, stock: 0, category: "Education" },
//     { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
// ];


// მოთხოვნები:
// 1. filter()-ით მიიღე მხოლოდ ის პროდუქტები, რომლებიც მარაგშია.
// 2. forEach()-ით გამოიტანე თითოეული პროდუქტის სახელი და ფასი.
// 3. map()-ით შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით.
// 4. findIndex()-ით იპოვე "Headphones"-ის ინდექსი.
// 5. some()-ით შეამოწმე, არის თუ არა პროდუქტი, რომლის ფასიც 2000 ლარზე მეტია.
// 6. every()-ით შეამოწმე, ყველა პროდუქტს აქვს თუ არა მარაგში მინიმუმ ერთი ცალი.

let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
]

let newList = products.filter(item => {
    return item.stock > 0
})

products.forEach(item => {
    console.log(item.name, item.price)
})

let newList2 = products.map(item => {
    return item.price + 100
})

let index = products.findIndex(item => {
    return item.name === "Headphones"
})

let result = products.some(item => {
    return item.price > 2000
})

let result2 = products.every(item => {
    return item.stock >= 1
})

console.log(newList)
console.log(newList2)
console.log(index)
console.log(result)
console.log(result2)