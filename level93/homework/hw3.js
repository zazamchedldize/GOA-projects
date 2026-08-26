// 3)შექმენი ფუნქცია:

// calculateShipping(price, shipping = 10)

// წესი:

// თუ პროდუქტის ფასი 100 ან მეტია → მიწოდება უფასოა.
// სხვა შემთხვევაში დაემატოს shipping.
// ფუნქციამ უნდა დააბრუნოს საბოლოო თანხა.

// გამოიძახე სხვადასხვა სიტუაციაში, მათ შორის საკუთარი shipping მნიშვნელობის გადაცემით.


function calculateShipping(price, shipping = 10) {
    if (price >= 100) {
        return price
    } else {
        return price + shipping
    }
}
console.log(calculateShipping(150))
console.log(calculateShipping(80))
console.log(calculateShipping(50, 20))