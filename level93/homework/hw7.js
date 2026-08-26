// 7)შექმენი ფუნქცია:

// calculateDiscount(price, discount = 10)

// ფუნქციამ უნდა გამოითვალოს ფასდაკლების შემდეგ დარჩენილი თანხა.

function calculateDiscount(price, discount = 10) {
    return price - discount
}

console.log(calculateDiscount(300, 40))
console.log(calculateDiscount(300))