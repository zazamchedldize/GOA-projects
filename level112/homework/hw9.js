// 9)let characters = [
//     { name: "Shadow", level: 15, health: 85, damage: 70 },
//     { name: "Blaze", level: 8, health: 95, damage: 45 },
//     { name: "Storm", level: 20, health: 60, damage: 90 },
//     { name: "Frost", level: 12, health: 80, damage: 65 },
//     { name: "Titan", level: 25, health: 100, damage: 55 },
//     { name: "Raven", level: 18, health: 40, damage: 85 }
// ];


// მოთხოვნები:
// 1. filter()-ით შეარჩიე პერსონაჟები, რომელთა დონე მინიმუმ 10-ია და ზიანი 60 ან მეტია.
// 2. forEach()-ით გამოიტანე თითოეული შერჩეული პერსონაჟის ინფორმაცია.
// 3. Ternary operator-ით განსაზღვრე ჯანმრთელობის სტატუსი:
//    - თუ ჯანმრთელობა 70 ან მეტია — "Healthy";
//    - სხვა შემთხვევაში — "Weak".
// 4. მეორე ternary operator-ით განსაზღვრე ძალის სტატუსი:
//    - თუ ზიანი 80 ან მეტია — "Powerful";
//    - სხვა შემთხვევაში — "Normal".
// 5. თუ პერსონაჟის ჯანმრთელობა 50-ზე ნაკლებია, if/else-ის გამოყენებით გამოიტანე "Warning: Low health!", სხვა შემთხვევაში — "Health is stable".
// მაგალითი:
// Shadow - Healthy - Normal - Health is stable
// Storm - Weak - Powerful - Health is stable


let characters = [
    { name: "Shadow", level: 15, health: 85, damage: 70 },
    { name: "Blaze", level: 8, health: 95, damage: 45 },
    { name: "Storm", level: 20, health: 60, damage: 90 },
    { name: "Frost", level: 12, health: 80, damage: 65 },
    { name: "Titan", level: 25, health: 100, damage: 55 },
    { name: "Raven", level: 18, health: 40, damage: 85 }
]

let newList = characters.filter(item => {
    return item.level >= 10 && item.damage >= 60
})

newList.forEach(item => {
    let healthStatus = item.health >= 70 ? "Healthy" : "Weak"
    let powerStatus = item.damage >= 80 ? "Powerful" : "Normal"
    let warning
    if(item.health < 50) {
        warning = "Warning: Low health!"
    } else {
        warning = "Health is stable"
    }
    console.log(`${item.name} - ${healthStatus} - ${powerStatus} - ${warning}`)
})
