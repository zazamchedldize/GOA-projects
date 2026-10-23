// 3)let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     brand: "ASUS",
//     stock: 12,
//     color: "Black",
//     category: "Electronics",
//     discount: false
// };


// მოთხოვნები:
// 1. გამოიტანე პროდუქტის სახელი, ფასი და მარაგის რაოდენობა.
// 2. ფასი შეცვალე 2800-ით.
// 3. მარაგის რაოდენობა შეცვალე 8-ით.
// 4. დაამატე rating მნიშვნელობით 4.8.
// 5. დაამატე warranty მნიშვნელობით "2 years".
// 6. წაშალე color.
// 7. discount შეცვალე true-ით.
// 8. წაშალე category.
// 9. დაამატე isAvailable მნიშვნელობით true.
// 10. ბოლოს გამოიტანე ფასი, ბრენდი, რეიტინგი და მთელი ობიექტი.

let product = {
    title: "Gaming Laptop",
    price: 2500,
    brand: "ASUS",
    stock: 12,
    color: "Black",
    category: "Electronics",
    discount: false
}

console.log(product.title)
console.log(product.price)
console.log(product.stock)

product.price = 2800
product.stock = 8
product.rating = 4.8
product.warranty = "2 years"

delete product.color

product.discount = true

delete product.category

product.isAvailable = true

console.log(product.price)
console.log(product.brand)
console.log(product.rating)
console.log(product)