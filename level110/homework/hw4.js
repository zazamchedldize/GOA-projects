// 4)შექმენი ობიექტი car:
// let car = {
//     brand: "BMW",
//     model: "M5",
//     speed: 0,
//     fuel: 60
// };

// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს ავტომობილის ინფორმაციას.
// 2. accelerate(amount) — გაზრდის ავტომობილის სიჩქარეს.
// 3. brake(amount) — შეამცირებს სიჩქარეს, მაგრამ ნულზე ნაკლები არ უნდა გახდეს.
// 4. drive(distance) — შეამცირებს საწვავს გავლილი მანძილის მიხედვით.
// პირობა: ყოველ გავლილ 10 კილომეტრზე საწვავი შემცირდეს 1 ერთეულით.

// თუ საწვავი არ არის საკმარისი, გამოიტანე შესაბამისი შეტყობინება.


let car = {
    brand: "BMW",
    model: "M5",
    speed: 0,
    fuel: 60,
    showInfo() {
        console.log(car)
    },
    accelerate(amount) {
        car.speed += amount
    },
    brake(amount) {
        car.speed -= amount
        if (car.speed < 0) {
            car.speed = 0
        }
    },
    drive(distance) {
        let fuelNeeded = distance / 10

        if (car.fuel >= fuelNeeded) {
            car.fuel -= fuelNeeded
            console.log("You drove " + distance + " km")
        } else {
            console.log("Not enough fuel!")
        }
    }
}

car.showInfo()
car.accelerate(100)
car.brake(30)
car.drive(200)
car.showInfo()
