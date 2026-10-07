// 12)let prices = [120, 450, 80, 300, 50, 700];

// .map()-ით:

// თუ ფასი 100-ზე ნაკლებია → დაუმატე 20
// თუ ფასი 100-დან 500-მდეა → დაუმატე 50
// თუ ფასი 500-ზე მეტია → დაუმატე 100

// შემდეგ .forEach()-ით დაბეჭდე:

// Old price → New price

// მაგალითად:

// 120 → 170
// 450 → 500
// 80 → 100


let prices = [120, 450, 80, 300, 50, 700]

let newPrices = prices.map((item) => {
    if(item < 100) {
        return item + 20
    } else if(item <= 500) {
        return item + 50
    } else {
        return item + 100
    }
})

newPrices.forEach((item, index) => {
    console.log(prices[index] + " → " + item)
})