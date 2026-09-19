// 17)მოცემულია:

// let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];

// ერთი ან რამდენიმე loop-ის გამოყენებით იპოვე:

// მაქსიმუმი;
// მინიმუმი;
// ჯამი;
// საშუალო;
// ლუწების რაოდენობა;
// კენტების რაოდენობა;
// 50-ზე მეტი რიცხვების რაოდენობა;
// 50-ზე ნაკლები რიცხვების რაოდენობა;
// ყველაზე დიდი ლუწი;
// ყველაზე დიდი კენტი;
// ყველაზე პატარა ლუწი;
// ყველაზე პატარა კენტი.


let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29]
let max = numbers[0]
let min = numbers[0]
let sum = 0
let even = 0
let odd = 0
let moreThan50 = 0
let lessThan50 = 0
let maxEven = 0
let maxOdd = 0
let minEven = 100
let minOdd = 100

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i]
    }
    if(numbers[i] < min) {
        min = numbers[i]
    }
    sum += numbers[i]
    if(numbers[i] % 2 === 0) {
        even++
        if(numbers[i] > maxEven) {
            maxEven = numbers[i]
        }
        if(numbers[i] < minEven) {
            minEven = numbers[i]
        }
    } else {
        odd++
        if(numbers[i] > maxOdd) {
            maxOdd = numbers[i]
        }
        if(numbers[i] < minOdd) {
            minOdd = numbers[i]
        }
    }
    if(numbers[i] > 50) {
        moreThan50++
    }
    if(numbers[i] < 50) {
        lessThan50++
    }
}
let average = sum / numbers.length
console.log(max)
console.log(min)
console.log(sum)
console.log(average)
console.log(even)
console.log(odd)
console.log(moreThan50)
console.log(lessThan50)
console.log(maxEven)
console.log(maxOdd)
console.log(minEven)
console.log(minOdd)