// 5)შექმენი Factory Function createEmployee, რომელსაც გადაეცემა:
// - name
// - position
// - salary
// - experience — სამუშაო გამოცდილება წლებში.
// დაბრუნებულ ობიექტს უნდა ჰქონდეს:
// 1. name
// 2. position
// 3. salary
// 4. experience
// 5. increaseSalary(amount) — ხელფასის გაზრდა.
//    - თუ გამოცდილება 5 წელზე მეტია, ხელფასი გაიზარდოს გადაცემული თანხით.
//    - სხვა შემთხვევაში გამოიტანოს "Not enough experience!".
// 6. changePosition(newPosition) — შეცვალოს პოზიცია მხოლოდ იმ შემთხვევაში, თუ თანამშრომელს მინიმუმ 2 წლის გამოცდილება აქვს.
// 7. getBonus() — დააბრუნოს ბონუსი:
//    - 10 წელზე მეტი გამოცდილება — 2000
//    - 5-დან 10 წლამდე — 1000
//    - 5 წელზე ნაკლები — 500
// 8. getInfo() — დააბრუნოს თანამშრომლის სრული ინფორმაცია.
// შექმენი მინიმუმ 3 თანამშრომელი განსხვავებული გამოცდილებით და შეამოწმე მათი მეთოდები.

function createEmployee(name, position, salary, experience) {
    return {
        name: name,
        position: position,
        salary: salary,
        experience: experience,

        increaseSalary(amount) {
            if(this.experience > 5) {
                this.salary += amount
            } else {
                console.log("Not enough experience!")
            }
        },

        changePosition(newPosition) {
            if(this.experience >= 2) {
                this.position = newPosition
            }
        },

        getBonus() {
            return this.experience > 10 ? 2000 : this.experience >= 5 ? 1000 : 500
        },

        getInfo() {
            return `${this.name} - ${this.position} - Salary: ${this.salary} - Experience: ${this.experience} years - Bonus: ${this.getBonus()}`
        }
    }
}

const employee1 = createEmployee("Goga", "Developer", 3000, 7)
const employee2 = createEmployee("Nika", "Designer", 2500, 3)
const employee3 = createEmployee("Zaza", "Manager", 4000, 12)
employee1.increaseSalary(500)
employee1.changePosition("Senior Developer")
employee2.increaseSalary(300)
employee2.changePosition("Senior Designer")
employee3.increaseSalary(1000)
employee3.changePosition("Director")
console.log(employee1.getBonus())
console.log(employee1.getInfo())
console.log(employee2.getBonus())
console.log(employee2.getInfo())
console.log(employee3.getBonus())
console.log(employee3.getInfo())