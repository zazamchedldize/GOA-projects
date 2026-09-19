// 5)შექმენი ფუნქცია analyzeNumbers, რომელსაც გადაეცემა რიცხვების მასივი.

// ფუნქციამ ციკლის გამოყენებით უნდა:

// იპოვოს მასივის რიცხვების ჯამი.

// დათვალოს ლუწი რიცხვები.

// დათვალოს კენტი რიცხვები.

// დააბრუნოს მიღებული შედეგები.

function analyzeNumbers(numbers) {
    let sum = 0
    let even = 0
    let odd = 0

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
        if(numbers[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return [sum, even, odd]
}
console.log(analyzeNumbers([3, 5, 3, 455, 6, 3, 22, 35, 6, 77, 5, 4, 8]))