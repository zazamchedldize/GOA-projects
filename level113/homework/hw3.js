// 3)let characters = [
//     { name: "Shadow", health: 85, level: 10, alive: true },
//     { name: "Dragon", health: 0, level: 15, alive: false },
//     { name: "Knight", health: 60, level: 7, alive: true },
//     { name: "Wizard", health: 100, level: 20, alive: true },
//     { name: "Hunter", health: 25, level: 5, alive: true },
//     { name: "Ghost", health: 0, level: 12, alive: false }
// ];


// მოთხოვნები:
// 1. filter()-ით შექმენი ახალი სია, სადაც მხოლოდ ცოცხალი პერსონაჟები იქნებიან.
// 2. forEach()-ით გამოიტანე თითოეული პერსონაჟის სახელი და Health.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეულ პერსონაჟს ექნება სახელი და ახალი Health, რომელიც იქნება არსებული Health + 20.
// 4. findIndex()-ით იპოვე "Wizard" პერსონაჟის ინდექსი.
// 5. some()-ით შეამოწმე, არსებობს თუ არა პერსონაჟი, რომლის Level 18-ზე მეტია.
// 6. every()-ით შეამოწმე, ყველა პერსონაჟი ცოცხალია თუ არა.

let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
]

let newList = characters.filter(item => {
    return item.alive === true
})

characters.forEach(item => {
    console.log(item.name, item.health)
})

let newList2 = characters.map(item => {
    return {
        name: item.name,
        health: item.health + 20
    }
})

let index = characters.findIndex(item => {
    return item.name === "Wizard"
})

let result = characters.some(item => {
    return item.level > 18
})

let result2 = characters.every(item => {
    return item.alive === true
})

console.log(newList)
console.log(newList2)
console.log(index)
console.log(result)
console.log(result2)