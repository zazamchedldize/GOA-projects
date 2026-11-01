// 3)let players = [
//     { name: "Sandro", sport: "Football", goals: 12 },
//     { name: "Elene", sport: "Tennis", goals: 8 },
//     { name: "Lasha", sport: "Football", goals: 19 },
//     { name: "Tako", sport: "Basketball", goals: 15 },
//     { name: "Data", sport: "Football", goals: 6 }
// ];


// 1. გამოიტანეთ ყველა სპორტსმენის სახელი და სპორტის სახეობა.
// 2. გამოიტანეთ მხოლოდ ფეხბურთელების სახელები.
// 3. გამოიტანეთ იმ სპორტსმენების სახელები, რომლებსაც 10-ზე მეტი გოლი აქვთ.
// 4. დაითვალეთ, რამდენი სპორტსმენი თამაშობს ფეხბურთს.
// 5. გამოთვალეთ ყველა სპორტსმენის გოლების ჯამი.
// 6. შექმენით ცარიელი მასივი topPlayers და დაამატეთ მასში სპორტსმენები, რომლებსაც 10 ან მეტი გოლი აქვთ.

let players = [
    { name: "Sandro", sport: "Football", goals: 12 },
    { name: "Elene", sport: "Tennis", goals: 8 },
    { name: "Lasha", sport: "Football", goals: 19 },
    { name: "Tako", sport: "Basketball", goals: 15 },
    { name: "Data", sport: "Football", goals: 6 }
]

let count = 0
let sum = 0
let topPlayers = []
players.forEach(item => {
    console.log(item.name, item.sport)
    if(item.sport === "Football") {
        console.log(item.name)
    }
    if(item.goals > 10) {
        console.log(item.name)
    } if(item.sport === "Football") {
        count++
    }
    
    sum += item.goals

    if(item.goals >= 10) {
        topPlayers.push(item)
    }
})

console.log(count, sum, topPlayers)