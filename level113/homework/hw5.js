// 5)let orders = [
//     { id: 101, customer: "Nika", total: 350, delivered: true },
//     { id: 102, customer: "Ana", total: 120, delivered: false },
//     { id: 103, customer: "Gio", total: 750, delivered: true },
//     { id: 104, customer: "Mariam", total: 90, delivered: false },
//     { id: 105, customer: "Luka", total: 500, delivered: true },
//     { id: 106, customer: "Saba", total: 220, delivered: false }
// ];


// მოთხოვნები:
// 1. filter()-ით შექმენი სია, რომელშიც მხოლოდ მიტანილი შეკვეთები იქნება.
// 2. forEach()-ით გამოიტანე ყველა შეკვეთის ID და მომხმარებლის სახელი.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეული შეკვეთის თანხა გაზრდილი იქნება 50 ლარით.
// 4. findIndex()-ით იპოვე შეკვეთა, რომლის ID არის 104.
// 5. some()-ით შეამოწმე, არსებობს თუ არა შეკვეთა, რომლის ღირებულება 700 ლარზე მეტია.
// 6. every()-ით შეამოწმე, ყველა შეკვეთის ღირებულება 100 ლარზე მეტია თუ არა.


let orders = [
    { id: 101, customer: "Nika", total: 350, delivered: true },
    { id: 102, customer: "Ana", total: 120, delivered: false },
    { id: 103, customer: "Gio", total: 750, delivered: true },
    { id: 104, customer: "Mariam", total: 90, delivered: false },
    { id: 105, customer: "Luka", total: 500, delivered: true },
    { id: 106, customer: "Saba", total: 220, delivered: false }
]

let newList = orders.filter(item => {
    return item.delivered === true
})

orders.forEach(item => {
    console.log(item.id, item.customer)
})

let newList2 = orders.map(item => {
    return item.total + 50
})

let index = orders.findIndex(item => {
    return item.id === 104
})

let result = orders.some(item => {
    return item.total > 700
})

let result2 = orders.every(item => {
    return item.total > 100
})

console.log(newList)
console.log(newList2)
console.log(index)
console.log(result)
console.log(result2)