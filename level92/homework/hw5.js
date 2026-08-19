// 5)let temperature = 28;

// Nested ternary-ით გამოიტანე:

// 0-ზე ნაკლები → "Freezing"
// 0-10 → "Cold"
// 11-20 → "Cool"
// 21-30 → "Warm"
// 31+ → "Hot"

let temperature = 30

temperature < 0 ? console.log("Freezing")
: temperature >= 0 && temperature <= 10 ? console.log("Cold")
: temperature >= 11 && temperature <= 20 ? console.log("Cool")
: temperature >= 21 && temperature <= 30 ? console.log("Warm")
: temperature >= 31 ? console.log("Hot")
: console.log("Invalid temperature")