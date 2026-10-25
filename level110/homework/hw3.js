// 3)შექმენი ობიექტი product:
// let product = {
//     name: "Laptop",
//     price: 2500,
//     quantity: 10
// };

// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს პროდუქტის ინფორმაციას.
// 2. calculateTotal() — დააბრუნებს ყველა პროდუქტის საერთო ღირებულებას.
// 3. sell(amount) — შეამცირებს პროდუქტის რაოდენობას.
// 4. restock(amount) — გაზრდის პროდუქტის რაოდენობას.
// 5. changePrice(newPrice) — შეცვლის პროდუქტის ფასს.
// პირობა: sell()-ის გამოყენებისას პროდუქტის რაოდენობა არ უნდა გახდეს ნულზე ნაკლები.


// 3)შექმენი ობიექტი product:
// let product = {
//     name: "Laptop",
//     price: 2500,
//     quantity: 10
// };

// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს პროდუქტის ინფორმაციას.
// 2. calculateTotal() — დააბრუნებს ყველა პროდუქტის საერთო ღირებულებას.
// 3. sell(amount) — შეამცირებს პროდუქტის რაოდენობას.
// 4. restock(amount) — გაზრდის პროდუქტის რაოდენობას.
// 5. changePrice(newPrice) — შეცვლის პროდუქტის ფასს.
// პირობა: sell()-ის გამოყენებისას პროდუქტის რაოდენობა არ უნდა გახდეს ნულზე ნაკლები.



let product = {
    name: "Laptop",
    price: 2500,
    quantity: 10,
    showInfo() {
        console.log(product)
    },
    calculateTotal() {
        return product.price * product.quantity
    },
    sell(amount) {
        if (product.quantity >= amount) {
            product.quantity -= amount
        } else {
            console.log("Not enough products!")
        }
    },
    restock(amount) {
        product.quantity += amount
    },
    changePrice(newPrice) {
        product.price = newPrice
    }
}

product.showInfo()
console.log(product.calculateTotal())
product.sell(3)
product.restock(5)
product.changePrice(2000)
product.showInfo()
console.log(product.calculateTotal())

