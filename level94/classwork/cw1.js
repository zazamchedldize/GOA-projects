// 1)შექმენი function expression სახელად checkNumber, რომელსაც გადაეცემა რიცხვი.

// ფუნქციამ უნდა დააბრუნოს:

// "Positive Even" — დადებითი და ლუწი
// "Positive Odd" — დადებითი და კენტი
// "Negative Even" — უარყოფითი და ლუწი
// "Negative Odd" — უარყოფითი და კენტი
// "Zero" — თუ რიცხვი 0-ია , use ternary

let checkNumber = function(number) {
    return number > 0 && number % 2 == 0 ? "Positive Odd" : number > 0 && number % 2 != 0 ? "Positive:Even" : number > 0 && number % 2 == 0 ? "Negative Even"
    : number < 0 && number % 2 != 0 ? "Negative Odd" : number == 0 ? "Zero" : "Wrong Number"
}

console.log(checkNumber(20))