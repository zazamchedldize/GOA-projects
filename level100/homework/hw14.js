// 14)let number = 58374629;

// Loop-ის გამოყენებით გაარკვიე:

// რამდენი ციფრია რიცხვში;
// რამდენი ციფრია ლუწი;
// რამდენი კენტია;
// ციფრების ჯამი;
// ყველაზე დიდი ციფრი;
// ყველაზე პატარა ციფრი;
// რამდენი ციფრია 5-ზე მეტი.


let number = "58374629"
let numbers = 0
let even = 0
let odd = 0
let sum = 0
let min = 9
let max = 0
let morethanfive = 0

for(let i = 0; i < number.length; i++) {
    let digit = Number(number[i])
    numbers++
    if(digit % 2 === 0) {
        even++
    } else {
        odd++
    }
    sum += digit
    if(digit > max) {
        max = digit
    }
    if(digit < min) {
        min = digit
    }
    if(digit > 5) {
        morethanfive++
    }
}

console.log(numbers)
console.log(even)
console.log(odd)
console.log(sum)
console.log(max)
console.log(min)
console.log(morethanfive)