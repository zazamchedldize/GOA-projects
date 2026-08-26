// 8)შექმენი ფუნქცია:

// convertTemperature(value, type = "C")

// თუ type არის "C" → Celsius გადააკეთე Fahrenheit-ში.

// ფორმულა:

// F = C * 9 / 5 + 32

// თუ type არის "F" → Fahrenheit გადააკეთე Celsius-ში.

// ფორმულა:

// C = (F - 32) * 5 / 9


function convertTemperature(value, type = "C") {
    if (type == "C") {
        return value * 9 / 5 + 32
    } else if (type == "F") {
        return (value - 32) * 5 / 9
    }
}
console.log(convertTemperature(30))
console.log(convertTemperature(86, "F"))
console.log(convertTemperature(100, "C"))