// 11)მოცემულია:

// let numbers = [12, 5, 20, 7, 30, 11, 8];

// შეასრულე:

// 1. .map()

// თუ რიცხვი ლუწია → გაამრავლე 2-ზე
// თუ კენტია → გაამრავლე 3-ზე

// 2. .forEach()

// დაბეჭდე მიღებული თითოეული რიცხვი:

// Result: ...

let numbers = [12, 5, 20, 7, 30, 11, 8]

let newNumbers = numbers.map((item) => {
    if(item % 2 === 0) {
        return item * 2
    } else {
        return item * 3
    }
})

newNumbers.forEach((item) => {
    console.log("Result: " + item)
})