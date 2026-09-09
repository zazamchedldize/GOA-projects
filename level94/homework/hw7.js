// 7)მიიღოს:

// price, discount

// წესები:

// თუ discount ≥ 50 → "Discount too high"
// თუ discount < 0 → "Invalid discount"
// სხვა შემთხვევაში გამოითვალოს საბოლოო ფასი.

let calculatePrice = function(price,discount) {
    if(discount >= 50) {
        return "Discount too high"
    } else if (discount < 0) {
        return "Invalid discount"
    } else {
        return price = price - discount
    }
}

console.log(calculatePrice(300,20))