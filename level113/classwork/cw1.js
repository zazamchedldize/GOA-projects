// 1)let products = [
//     { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
//     { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
//     { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
//     { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
//     { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
//     { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
//     { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
// ];


// მოთხოვნები
// 1. forEach()
// - დაბეჭდე თითოეული პროდუქტის სახელი და ფასი შემდეგი ფორმატით:
//   "Laptop costs 2500 GEL"
// - ცალკე დაბეჭდე მხოლოდ იმ პროდუქტების სახელები, რომლებიც მარაგშია (inStock: true).
// 2. filter()
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ Electronics კატეგორიის პროდუქტები.
// - შექმენი ახალი სია, სადაც მოხვდება პროდუქტები, რომელთა ფასი 500-ზე მეტია და რეიტინგი 4.5-ზე მაღალია.
// - შექმენი ახალი სია, სადაც იქნება მხოლოდ ის პროდუქტები, რომლებიც მარაგში არ არის.
// 3. map()
// - შექმენი ახალი სია, რომელშიც თითოეული პროდუქტი წარმოდგენილი იქნება შემდეგი ფორმით:
//   "Laptop - 2500 GEL"
// - შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით. შეინარჩუნე თითოეული პროდუქტის დანარჩენი ინფორმაცია.
// 4. findIndex()
// - იპოვე იმ პროდუქტის ინდექსი, რომლის სახელია "Monitor".
// - იპოვე პირველი პროდუქტის ინდექსი, რომლის რეიტინგიც 4-ზე ნაკლებია.



let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
]

products.forEach(item => {
    console.log(`${item.name} costs ${item.price} GEL`)

    if(item.inStock === true) {
        console.log(item.name)
    }
})

let newList1 = products.filter(item => {
    return item.category === "Electronics"
})

let newList2 = products.filter(item => {
    return item.price > 500 && item.rating > 4.5
})

let newList3 = products.filter(item => {
    return item.inStock === false
})

let newList4 = products.map(item => {
    return `${item.name} - ${item.price} GEL`
})

let newList5 = products.map(item => {
    return {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price + 100,
        rating: item.rating,
        inStock: item.inStock
    }
})

let index1 = products.findIndex(item => {
    return item.name === "Monitor"
})

let index2 = products.findIndex(item => {
    return item.rating < 4
})


let hasExpensiveProduct = products.some(item => {
    return item.price > 2000
})

let hasOutOfStock = products.some(item => {
    return item.inStock === false
})


let allPricesAbove100 = products.every(item => {
    return item.price > 100
})

let allRatingsAbove35 = products.every(item => {
    return item.rating > 3.5
})


let availableProducts = products.filter(item => {
    return item.inStock === true
})

let productInfo = availableProducts.map(item => {
    return {
        name: item.name,
        price: item.price
    }
})

productInfo.forEach(item => {
    console.log(`${item.name} - ${item.price} GEL`)
})
console.log(newList1)
console.log(newList2)
console.log(newList3)
console.log(newList4)
console.log(newList5)
console.log(index1)
console.log(index2)
console.log(hasExpensiveProduct)
console.log(hasOutOfStock)
console.log(allPricesAbove100)
console.log(allRatingsAbove35)
