// 6)
// let game = {
//     playerName: "Shadow",
//     level: 12,
//     health: 85,
//     coins: 450,
//     weapon: "Sword",
//     armor: "Steel",
//     isAlive: true,
//     rank: "Silver"
// };


// შეასრულე მოქმედებები მოცემული თანმიმდევრობით:
// 1. playerName, health და rank გამოიტანე bracket notation-ით.
// 2. level შეცვალე 15-ით bracket notation-ის გამოყენებით.
// 3. coins შეცვალე 700-ით dot notation-ის გამოყენებით.
// 4. weapon შეცვალე "Dragon Sword"-ით bracket notation-ით.
// 5. დაამატე magicPower მნიშვნელობით 90 bracket notation-ის გამოყენებით.
// 6. დაამატე pet მნიშვნელობით "Wolf" dot notation-ის გამოყენებით.
// 7. წაშალე armor bracket notation-ის გამოყენებით.
// 8. წაშალე isAlive dot notation-ის გამოყენებით.
// 9. დაამატე achievements მნიშვნელობით 5.
// 10. rank შეცვალე "Gold"-ით bracket notation-ის გამოყენებით.
// 11. გამოიტანე ყველა შეცვლილი და დამატებული თვისება.
// 12. დაბეჭდე საბოლოო ობიექტი.

let game = {
    playerName: "Shadow",
    level: 12,
    health: 85,
    coins: 450,
    weapon: "Sword",
    armor: "Steel",
    isAlive: true,
    rank: "Silver"
}

console.log(game["playerName"])
console.log(game["health"])
console.log(game["rank"])

game["level"] = 15

game.coins = 700

game["weapon"] = "Dragon Sword"

game["magicPower"] = 90

game.pet = "Wolf"

delete game["armor"]

delete game.isAlive

game.achievements = 5

game["rank"] = "Gold"

console.log(game["level"])
console.log(game.coins)
console.log(game["weapon"])
console.log(game["magicPower"])
console.log(game.pet)
console.log(game.achievements)
console.log(game["rank"])

console.log(game)