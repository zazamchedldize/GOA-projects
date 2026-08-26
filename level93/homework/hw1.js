// 1)შექმენი ფუნქცია calculatePrice(price, quantity).

// price — პროდუქტის ფასი
// quantity — რაოდენობა
// ფუნქციამ უნდა დააბრუნოს საბოლოო ფასი.
// თუ quantity არ გადაეცა, default მნიშვნელობა იყოს 1.
// ფუნქცია გამოიძახე მინიმუმ 3 სხვადასხვა არგუმენტით.


function calculatePrice(price, quantity=1) {
    return price * quantity
} 

console.log(calculatePrice(4, 5))
console.log(calculatePrice(50, 2))
console.log(calculatePrice(100))