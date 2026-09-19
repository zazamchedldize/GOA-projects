// 3)მოცემულია:

// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];

// შექმენი პროგრამა, რომელიც:

// დაბეჭდავს ყველა ლუწ რიცხვს.

// დაითვლის ყველა კენტი რიცხვის ჯამს.

// იპოვის ყველაზე დიდ რიცხვს.

// იპოვის ყველაზე პატარა რიცხვს.

// თუ რიცხვი 10-ზე მეტია და 25-ზე ნაკლებია, დაბეჭდავს "Special number".

// უკუღმა ციკლით დაბეჭდავს ყველა რიცხვს, რომელიც 3-ის ჯერადია.

let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21]

let sum = 0
let max = numbers[0]
let min = numbers[0]

for(let i = 0; i < numbers.length; i++) {

    if(numbers[i] % 2 == 0) {
        console.log(numbers[i])
    } else if(numbers[i] % 2 !== 0) {
        sum += numbers[i]
    }
    if(numbers[i] > max) {
        max = numbers[i]
    }
    if(numbers[i] < min) {
        min = numbers[i]
    }
    if(numbers[i] > 10 && numbers[i] < 25) {
        console.log("Special number")
    }
}

console.log("odd sum:", sum)
console.log("max:", max)
console.log("min:", min)

for(let i = numbers.length - 1; i >= 0; i--) {
    if(numbers[i] % 3 == 0) {
        console.log(numbers[i])
    }
}