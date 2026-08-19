// 10)let a = 20;
// let b=5;
// let operator = "*";

// switch-ის გამოყენებით შეასრულე ოპერაცია:

// "+" → შეკრება
// "-" → გამოკლება
// "*" → გამრავლება
// "/" → გაყოფა
// "%" → ნაშთი
// სხვა ოპერატორზე:
// "Invalid operator"

let a = 20
let b = 5
let operator = "*"

switch (operator) {
    case "+":
        console.log(a + b)
        break
    case "-":
        console.log(a - b)
        break
    case "*":
        console.log(a * b)
        break
    case "/":
        console.log(a / b)
        break
    case "%":
        console.log(a % b)
        break
    default:
        console.log("Invalid operator")
        break                
}