// =================METHODS=================

// 1)გოგა, დავალებებს ოდნავ გავამარტივებ: დავტოვებ საინტერესო ლოგიკას და this-ის გამოყენებას, მაგრამ მოვაშორებ ზედმეტად რთულ პირობებს. დავალებები იქნება საშუალო სირთულის და თანდათან გართულდება.
// JavaScript — ობიექტის მეთოდები (Methods)
// დავალება 1. მოთამაშის მართვა
// შექმენი ობიექტი player, რომელსაც ექნება შემდეგი თვისებები:
// let player = {
//     name: "Shadow",
//     health: 100,
//     energy: 80,
//     level: 1
// };

// დაამატე შემდეგი მეთოდები:
// 1. showInfo() — გამოიტანს მოთამაშის სახელს, ჯანმრთელობას, ენერგიასა და დონეს.
// 2. takeDamage(amount) — შეამცირებს ჯანმრთელობას გადაცემული რიცხვით.
// 3. heal(amount) — გაზრდის ჯანმრთელობას გადაცემული რიცხვით.
// 4. levelUp() — მოთამაშის დონეს გაზრდის ერთით.
// 5. useEnergy(amount) — შეამცირებს ენერგიას გადაცემული რიცხვით.

// მაგალითი --- მაგალითს სხვა დავალებებს აღარ დავურთავ თქვენით შეასრულებთ:
// player.takeDamage(20);
// player.heal(10);
// player.levelUp();
// player.showInfo();


let player = {
    name: "Shadow",
    health: 100,
    energy: 80,
    level: 1,

    showInfo() {
        console.log(player.name, player.health, player.energy, player.level)
    },

    takeDamage(amount) {
        player.health -= amount
    },

    heal(amount) {
        player.health += amount
    },

    levelUp() {
        player.level += 1
    },

    useEnergy(amount) {
        player.energy -= amount
    }
}

player.takeDamage(20)
player.heal(10)
player.levelUp()
player.showInfo()
