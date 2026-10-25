// 6)შექმენი ორი ობიექტი:
// let player = {
//     name: "Shadow",
//     health: 100,
//     attack: 25
// };

// let enemy = {
//     name: "Dragon",
//     health: 150,
//     attack: 20
// };

// player ობიექტში დაამატე მეთოდები:
// 1. showInfo() — გამოიტანს მოთამაშის ინფორმაციას.
// 2. attackEnemy(enemy) — მტრის ჯანმრთელობას შეამცირებს მოთამაშის შეტევის ძალით.
// enemy ობიექტში დაამატე მეთოდები:
// 1. showInfo() — გამოიტანს მტრის ინფორმაციას.
// 2. attackPlayer(player) — მოთამაშის ჯანმრთელობას შეამცირებს მტრის შეტევის ძალით.
// პირობა: ჯანმრთელობა ნულზე ნაკლები არ უნდა გახდეს.


let player = {
    name: "Shadow",
    health: 100,
    attack: 25,
    showInfo() {
        console.log(player)
    },
    attackEnemy(enemy) {
        enemy.health -= player.attack

        if (enemy.health < 0) {
            enemy.health = 0
        }
    }
}

let enemy = {
    name: "Dragon",
    health: 150,
    attack: 20,
    showInfo() {
        console.log(enemy)
    },
    attackPlayer(player) {
        player.health -= enemy.attack

        if (player.health < 0) {
            player.health = 0
        }
    }
}

player.showInfo()
enemy.showInfo()
player.attackEnemy(enemy)
enemy.attackPlayer(player)
player.showInfo()
enemy.showInfo()
