// 8)მოცემულია:

// let prices = [100, 200, 350, 80, 500];

// პირველ ეტაპზე .map()-ით თითოეულ ფასს დაუმატე 50.

// შემდეგ მიღებული ახალი სია .forEach()-ით დაბეჭდე.

// მაგალითად:

// New price: 150
// New price: 250
// New price: 400
// ...

let prices = [100, 200, 350, 80, 500]

let newPrices = prices.map((item) => {
    return item + 50
})

newPrices.forEach((item) => {
    console.log("New price: " + item)
})