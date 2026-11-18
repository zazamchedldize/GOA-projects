// 7)let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     category: "Electronics",
//     stock: 12,
//     available: true
// };


// 1. Destructuring-ით შეინახე ყველა მნიშვნელობა.
// 2. title შეინახე ცვლადში productName.
// 3. stock შეინახე ცვლადში quantity.
// 4. გამოიტანე პროდუქტის სახელი და ფასი.
// 5. თუ პროდუქტი ხელმისაწვდომია, გამოიტანე "Product is available", სხვა შემთხვევაში "Out of stock".


let product = {
    title: "Gaming Laptop",
    price: 2500,
    category: "Electronics",
    stock: 12,
    available: true
}

let {title: productName, price, category, stock: quantity, available} = product

console.log(productName)
console.log(price)
console.log(category)
console.log(quantity)

if (available) {
    console.log("Product is available")
} else {
    console.log("Out of stock")
}