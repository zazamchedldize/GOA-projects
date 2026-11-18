// 4)et character = {
//     username: "Shadow",
//     level: 15,
//     stats: [100, 80, 45],
//     weapons: ["Sword", "Bow", "Dagger"]
// };


// დავალება:
// 1. Object Destructuring-ით მიიღეთ username, level, stats და weapons.
// 2. Array Destructuring-ით stats მასივიდან მიიღეთ:
//    - health
//    - energy
//    - damage
// 3. Array Destructuring-ით weapons მასივიდან მიიღეთ პირველი ორი იარაღი.
// 4. გამოიტანეთ პერსონაჟის სრული ინფორმაცია.
// 5. თუ health 50-ზე ნაკლებია, გამოიტანეთ "Low Health!", სხვა შემთხვევაში "Character is Ready!".



let character = {
    username: "Shadow",
    level: 15,
    stats: [100, 80, 45],
    weapons: ["Sword", "Bow", "Dagger"]
}

let {username, level, stats, weapons} = character

let [health, energy, damage] = stats

let [weapon1, weapon2] = weapons

console.log(username)
console.log(level)
console.log(health)
console.log(energy)
console.log(damage)
console.log(weapon1)
console.log(weapon2)

if (health < 50) {
    console.log("Low Health!")
} else {
    console.log("Character is Ready!")
}