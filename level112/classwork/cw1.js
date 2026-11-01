// let products = [
//     { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
//     { name: "Phone", price: 1800, category: "Electronics", inStock: false },
//     { name: "Book", price: 40, category: "Education", inStock: true },
//     { name: "Headphones", price: 150, category: "Electronics", inStock: true },
//     { name: "Notebook", price: 15, category: "Education", inStock: false }
// ];

// 1)forEach()-ის გამოყენებით გამოიტანეთ თითოეული პროდუქტის სახელი.

// 2)გამოიტანეთ თითოეული პროდუქტის სახელი და ფასი შემდეგი ფორმატით:
// Laptop - 2500
// Phone - 1800
// Book - 40

// 3)გამოიტანეთ იმ პროდუქტების სახელები, რომელთა inStock მნიშვნელობაც true-ია.

// 4)გამოიტანეთ იმ პროდუქტების სახელები და ფასები, რომელთა ფასი 1000-ზე მეტია.

// 5)გამოიტანეთ მხოლოდ იმ პროდუქტების სახელები, რომელთა კატეგორიაა "Education".

// 6)გამოთვალეთ ყველა პროდუქტის ფასების ჯამი.


let products = [
    { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
    { name: "Phone", price: 1800, category: "Electronics", inStock: false },
    { name: "Book", price: 40, category: "Education", inStock: true },
    { name: "Headphones", price: 150, category: "Electronics", inStock: true },
    { name: "Notebook", price: 15, category: "Education", inStock: false }
]

let sum = 0

products.forEach(item => {
    console.log(item.name)
    console.log(item.name + "-" + item.price)
    if(item.inStock) {
        console.log(item.name)
    }
    if(item.price > 1000) {
        console.log(item.name, item.price)
    }
    if(item.category == "Education") {
        console.log(item.name)
    }
    sum += item.price
})

console.log(sum)