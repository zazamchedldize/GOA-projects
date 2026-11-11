// 1)შექმენი Factory Function createCharacter, რომელსაც გადაეცემა სამი პარამეტრი:
// - name — პერსონაჟის სახელი
// - health — სიცოცხლის რაოდენობა
// - damage — დარტყმის ძალა
// Factory Function-მა უნდა დააბრუნოს ობიექტი შემდეგი თვისებებითა და მეთოდებით:
// 1. name
// 2. health
// 3. damage
// 4. attack(target) — უნდა შეამციროს მოწინააღმდეგის სიცოცხლე საკუთარი damage-ის მიხედვით.
//    - თუ მოწინააღმდეგის სიცოცხლე 0 ან ნაკლებია, გამოიტანოს შეტყობინება "Target is already defeated!".
//    - თუ მოწინააღმდეგის სიცოცხლე დადებითია, შეუმციროს სიცოცხლე.
// 5. heal(amount) — უნდა აღადგინოს პერსონაჟის სიცოცხლე.
//    - სიცოცხლე არ უნდა გახდეს 100-ზე მეტი.
// 6. getStatus() — დააბრუნოს პერსონაჟის ინფორმაცია სახელითა და სიცოცხლით.
// შექმენი 3 პერსონაჟი და მოახდინე მათ შორის რამდენიმე შეტევა.


function createCharacter(name, health, damage) {
    return {
        name: name,
        health: health,
        damage: damage,

        attack(target) {
            if (target.health <= 0) {
                console.log("Target is already defeated!")
            } else {
                target.health -= this.damage

                if (target.health < 0) {
                    target.health = 0
                }
            }
        },

        heal(amount) {
            this.health += amount

            if (this.health > 100) {
                this.health = 100
            }
        },

        getStatus() {
            return `${this.name} has ${this.health} health`
        }
    }
}

const character1 = createCharacter("Goga", 100, 25)
const character2 = createCharacter("Zaza", 80, 20)
const character3 = createCharacter("Nika", 90, 15)


character1.attack(character2)
character2.attack(character3)
character3.attack(character1)
character1.attack(character2)
character2.attack(character1)
character2.heal(30)
console.log(character1.getStatus())
console.log(character2.getStatus())
console.log(character3.getStatus())