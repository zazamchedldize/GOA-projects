// 5)შექმენი analyzeNumbers Function Expression-ის გამოყენებით.

// ფუნქციამ მიიღოს 3 რიცხვი და დააბრუნოს ყველაზე დიდი რიცხვი.

// მაგალითად:

// analyzeNumbers(15, 42, 27) //42

const analyzeNumbers = function(number1, number2, number3) {

    if (number1 >= number2 && number1 >= number3) {
        return number1
    } else if (number2 >= number1 && number2 >= number3) {
        return number2
    } else {
        return number3
    }
}

console.log(analyzeNumbers(10, 23, 42))