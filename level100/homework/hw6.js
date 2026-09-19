// 6)const prices = [100, 250, 80, 400, 150];

// შექმენი ფუნქცია calculateDiscount, რომელსაც გადაეცემა ფასდაკლების პროცენტი.

// ფუნქციამ ციკლის გამოყენებით უნდა გამოთვალოს თითოეული პროდუქტის ახალი ფასი და დაბეჭდოს ყველა მათგანი.

const prices = [100, 250, 80, 400, 150]

function calculateDiscount(discount) {
    for(let i = 0; i < prices.length; i++) {
        let newPrice = prices[i] - (prices[i] * discount / 100)
        console.log(newPrice)
    }
}
calculateDiscount(20)