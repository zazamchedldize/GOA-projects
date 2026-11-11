// 4)შექმენი Factory Function createCart, რომელსაც საწყისად არ გადაეცემა პარამეტრები.

// დაბრუნებულ ობიექტს უნდა ჰქონდეს:

// - items — ცარიელი მასივი.

// მეთოდები:
// 1. addProduct(name, price, quantity) — დაამატოს პროდუქტი კალათაში.
//    - თუ პროდუქტი უკვე არსებობს, გაზარდოს მისი რაოდენობა.
//    - თუ არ არსებობს, დაამატოს ახალი ობიექტი.
// 2. removeProduct(name) — წაშალოს პროდუქტი სახელის მიხედვით.
// 3. increaseQuantity(name, amount) — გაზარდოს კონკრეტული პროდუქტის რაოდენობა.
// 4. getTotal() — დაითვალოს ყველა პროდუქტის საერთო ღირებულება.
// 5. getCartInfo() — დააბრუნოს კალათაში არსებული ყველა პროდუქტის ინფორმაცია.
// შექმენი ორი დამოუკიდებელი კალათა და შეამოწმე, რომ ერთი კალათის ცვლილება მეორეზე არ მოქმედებდეს.


function createCart() {
    return {
        items: [],

        addProduct(name, price, quantity) {
            let product = this.items.find(item => item.name === name)

            if(product) {
                product.quantity += quantity
            } else {
                this.items.push({
                    name: name,
                    price: price,
                    quantity: quantity
                })
            }
        },

        removeProduct(name) {
            this.items = this.items.filter(item => item.name !== name)
        },

        increaseQuantity(name, amount) {
            let product = this.items.find(item => item.name === name)

            if(product) {
                product.quantity += amount
            }
        },

        getTotal() {
            let total = 0

            for(let i = 0; i < this.items.length; i++) {
                total += this.items[i].price * this.items[i].quantity
            }

            return total
        },

        getCartInfo() {
            return this.items
        }
    }
}

const cart1 = createCart()
const cart2 = createCart()
cart1.addProduct("Laptop", 2500, 1)
cart1.addProduct("Mouse", 50, 2)
cart1.addProduct("Laptop", 2500, 1)
cart2.addProduct("Phone", 1500, 1)
cart2.addProduct("Headphones", 200, 2)
cart1.increaseQuantity("Mouse", 3)
cart2.increaseQuantity("Phone", 1)
cart1.removeProduct("Mouse")
console.log(cart1.getCartInfo())
console.log(cart1.getTotal())
console.log(cart2.getCartInfo())
console.log(cart2.getTotal())