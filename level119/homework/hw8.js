// 8)let product = {
//     name: "Laptop",
//     price: 2500,
//     brand: "Lenovo",
//     inStock: true
// };

// let updatedInfo = {
//     price: 2200,
//     inStock: false,
//     discount: 300
// };


// 1. Spread Operator-ის გამოყენებით შექმენი ახალი ობიექტი updatedProduct.
// 2. გააერთიანე ორივე ობიექტი ისე, რომ updatedInfo-ში არსებული მნიშვნელობები გადაიწეროს.
// 3. საწყისი ობიექტები არ შეცვალო.
// 4. დაბეჭდე მიღებული ობიექტი.

let product = {
    name: "Laptop",
    price: 2500,
    brand: "Lenovo",
    inStock: true
}

let updatedInfo = {
    price: 2200,
    inStock: false,
    discount: 300
}

let updatedProduct = {...product, ...updatedInfo}

console.log(updatedProduct)