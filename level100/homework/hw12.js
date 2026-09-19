// 12)შექმენი ფუნქცია numberGame, რომელსაც გადაეცემა საიდუმლო რიცხვი.

// ფუნქციაში:

// შექმენი ცვლადი guess, რომლის საწყისი მნიშვნელობა იქნება 1.

// გამოიყენე while ციკლი.

// თუ guess საიდუმლო რიცხვზე ნაკლებია, გაზარდე ის 1-ით.

// თუ guess საიდუმლო რიცხვს გაუტოლდება, დაბეჭდე "You found it!" და შეწყვიტე ციკლი break-ით.

// დათვალე, რამდენი გამეორება დასჭირდა რიცხვის პოვნას.

// დააბრუნე გამეორებების რაოდენობა.

function numberGame(secretNumber) {
    let guess = 1
    let repeat = 0

    while(true) {
        repeat++
        if(guess === secretNumber) {
            console.log("You found it!")
            break
        }
        if(guess < secretNumber) {
            guess++
        }
    }
    return repeat
}
console.log(numberGame(5))