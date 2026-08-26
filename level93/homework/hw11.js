// 11)შექმენი ფუნქცია:

// ticketPrice(age, price = 50)

// წესები:

// 5 წლამდე → უფასო
// 5–12 → ფასის 50%
// 13–59 → სრული ფასი
// 60 და ზემოთ → ფასის 30%

// მაგალითად:

// ticketPrice(4, 50)   // 0
// ticketPrice(10, 50)  // 25
// ticketPrice(25, 50)  // 50
// ticketPrice(65, 50)  // 15
// ticketPrice(20)      // 50

function ticketPrice(age, price = 50) {
    if (age < 5) {
        return 0
    } else if (age >= 5 && age <= 12) {
        return price * 0.5
    } else if (age >= 13 && age <= 59) {
        return price
    } else {
        return price * 0.3

    }
}
console.log(ticketPrice(4, 50))
console.log(ticketPrice(10, 50))
console.log(ticketPrice(25, 50))
console.log(ticketPrice(65, 50))
console.log(ticketPrice(20))