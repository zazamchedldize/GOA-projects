// 2)მოცემულია მასივი:

// const numbers = [-5, 10, -2, 8, 0, 15, -7];

// ციკლისა და if...else-ის გამოყენებით:

// დათვალე დადებითი რიცხვები.

// დათვალე უარყოფითი რიცხვები.

// დათვალე ნულების რაოდენობა.


const numbers = [-5, 10, -2, 8, 0, 15, -7]
let positive = 0
let negative = 0
let zeros = 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        positive++
    } else if(numbers[i] < 0) {
        negative++
    } else {
        zeros++
    }
}

console.log(positive,negative,zeros)