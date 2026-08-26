// 4)შექმენი ფუნქცია:

// checkAge(name, age = 18)

// ფუნქციამ უნდა დააბრუნოს:

// 18 ან მეტი → "name is adult"
// 18-ზე ნაკლები → "name is minor"

// შემდეგ გამოიძახე ფუნქცია მინიმუმ 4-ჯერ.


function checkAge(name, age = 18) {
    if (age >= 18) {
        return "name is adult"
    } else if (age < 18) {
        return "name is minor"
    }
}

console.log(checkAge("zaza", 14))
console.log(checkAge("zaza", 30))
console.log(checkAge("zaza", 44))
console.log(checkAge("zaza"))
