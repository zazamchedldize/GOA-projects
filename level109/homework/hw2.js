// 2)let player = {
//     name: "Dragon",
//     health: 100,
//     energy: 80,
//     level: 5,
//     weapon: "Sword",
//     armor: "Basic"
// };


// შეასრულე მოქმედებები:
// 1. გამოიტანე პერსონაჟის სახელი, სიცოცხლე და იარაღი.
// 2. health შეცვალე 65-ით.
// 3. weapon შეცვალე "Bow"-ით.
// 4. დაამატე damage მნიშვნელობით 40.
// 5. დაამატე magic მნიშვნელობით true.
// 6. წაშალე armor.
// 7. level შეცვალე 6-ით.
// 8. დაამატე rank მნიშვნელობით "Gold".
// 9. წაშალე energy.
// 10. გამოიტანე საბოლოო ობიექტი.


let player = {
    name: "Dragon",
    health: 100,
    energy: 80,
    level: 5,
    weapon: "Sword",
    armor: "Basic"
};


console.log(player.name)
console.log(player.health)
console.log(player.weapon)

player.weapon = "Bow"
player.damage = 40
player.magic = true
delete player.armor
player.level = 6
player.rank = "Gold"
delete player.energy

console.log(player)