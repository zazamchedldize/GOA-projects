// 4)let orders = [
//     { id: 101, customer: "Nika", total: 250, status: "delivered" },
//     { id: 102, customer: "Ana", total: 80, status: "pending" },
//     { id: 103, customer: "Gio", total: 420, status: "delivered" },
//     { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
//     { id: 105, customer: "Luka", total: 310, status: "pending" }
// ];


// 1. გამოიტანეთ ყველა შეკვეთის ნომერი და მომხმარებლის სახელი.
// 2. გამოიტანეთ მხოლოდ დასრულებული (delivered) შეკვეთები.
// 3. გამოიტანეთ იმ შეკვეთების ნომრები, რომელთა ღირებულება 200-ზე მეტია.
// 4. დაითვალეთ, რამდენი შეკვეთაა pending სტატუსით.
// 5. გამოთვალეთ ყველა შეკვეთის საერთო ღირებულება.
// 6. შექმენით ცარიელი მასივი expensiveOrders და მასში დაამატეთ შეკვეთები, რომელთა ღირებულება 200-ზე მეტია და სტატუსი delivered არის.


let orders = [
    { id: 101, customer: "Nika", total: 250, status: "delivered" },
    { id: 102, customer: "Ana", total: 80, status: "pending" },
    { id: 103, customer: "Gio", total: 420, status: "delivered" },
    { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
    { id: 105, customer: "Luka", total: 310, status: "pending" }
]

let pending = 0
let sum = 0
let expensiveOrders = []

orders.forEach(item => {
    console.log(item.id, item.customer)
    if(item.status === "delivered") {
        console.log(item)
    } if(item.total > 200) {
        console.log(item.id)
    } if(item.status === "pending") {
        pending++
    }

    sum += item.total

    if(item.total > 200 && item.status === "delivered") {
        expensiveOrders.push(item)
    }
})

console.log(pending,sum,expensiveOrders)