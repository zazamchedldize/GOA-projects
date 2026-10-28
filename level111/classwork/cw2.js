
// 2)let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     budget: 120000,
//     marketing: 15000,
//     development: 45000,
//     design: 12000,
//     support: 8000,
//     active: true
// };

// 1. for...in ციკლის გამოყენებით დაბეჭდე ობიექტის ყველა გასაღები და შესაბამისი მნიშვნელობა.
// 2. დაითვალე ობიექტში არსებული რიცხვითი მნიშვნელობების რაოდენობა.
// 3. შეკრიბე ყველა რიცხვითი მნიშვნელობა,მიღებული ჯამი შეინახე total ცვლადში.
// 4. დაითვალე, რამდენი გასაღების სახელია 6 სიმბოლოზე მეტი სიგრძის.


let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    budget: 120000,
    marketing: 15000,
    development: 45000,
    design: 12000,
    support: 8000,
    active: true
}

let count = 0
let total = 0
let longKeys = 0

for (let key in company) {
    console.log(key, company[key])

    if (typeof company[key] === "number") {
        count++
        total += company[key]
    }

    if (key.length > 6) {
        longKeys++
    }
}

console.log(count)
console.log(total)
console.log(longKeys)