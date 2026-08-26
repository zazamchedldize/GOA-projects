// 12)შექმენი ფუნქცია:

// analyzeNumber(number, limit = 100)

// ფუნქციამ უნდა დააბრუნოს:

// თუ რიცხვი უარყოფითია → "Negative"
// თუ 0-ია → "Zero"
// თუ დადებითია და limit-ზე ნაკლებია → "Small positive"
// თუ limit-ზე მეტია → "Large positive"

// შეასრულეთ ternary ით

function analyzeNumber(number, limit = 100) {
    return number < 0 ? "Negative" : number == 0 ? "Zero" : number > 0 && number < limit ? "Small positive": number > limit ? "Large positive" : "Wrong number"
}

console.log(analyzeNumber(-5))
console.log(analyzeNumber(0))
console.log(analyzeNumber(50))
console.log(analyzeNumber(150))