// 2)let numbers = [10, 20, 30, 40, 50];


// 1. Spread Operator-ის გამოყენებით შექმენი მისი ასლი copiedNumbers.
// 2. ასლში პირველი ელემენტი შეცვალე 100-ით.
// 3. ასლში ბოლო ელემენტი შეცვალე 500-ით.
// 4. საწყის მასივში დაამატე 60.
// 5. დაბეჭდე ორივე მასივი და დააკვირდი განსხვავებას.


let numbers = [10, 20, 30, 40, 50]

let copiedNumbers = [...numbers]

copiedNumbers[0] = 100
copiedNumbers[4] = 500
numbers.unshift(60)

console.log(numbers,copiedNumbers)