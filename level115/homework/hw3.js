// 3)შექმენი Factory Function createStudent, რომელსაც გადაეცემა:
// - name
// - age
// - grades — ქულების მასივი.
// დაბრუნებულ ობიექტს უნდა ჰქონდეს:
// 1. name
// 2. age
// 3. grades
// 4. addGrade(grade) — დაამატოს ახალი ქულა მხოლოდ იმ შემთხვევაში, თუ ის 0-დან 100-მდეა.
// 5. getAverage() — დაითვალოს და დააბრუნოს საშუალო ქულა.
// 6. getResult() — საშუალო ქულის მიხედვით დააბრუნოს:
//    - 90 ან მეტი — "Excellent"
//    - 70-დან 89-მდე — "Good"
//    - 50-დან 69-მდე — "Average"
//    - 50-ზე ნაკლები — "Failed"
// 7. getInfo() — დააბრუნოს სტუდენტის სრული ინფორმაცია, მათ შორის საშუალო ქულა და შედეგი.
// შექმენი მინიმუმ 3 სტუდენტი განსხვავებული ქულებით.


function createStudent(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades,

        addGrade(grade) {
            if(grade >= 0 && grade <= 100) {
                this.grades.push(grade)
            }
        },

        getAverage() {
            let sum = 0

            for(let i = 0; i < this.grades.length; i++) {
                sum += this.grades[i]
            }

            return sum / this.grades.length
        },

        getResult() {
            let average = this.getAverage()

            return average >= 90 ? "Excellent" : average >= 70 ? "Good" : average >= 50 ? "Average" : "Failed"
        },

        getInfo() {
            return `${this.name} - ${this.age} - Grades: ${this.grades} - Average: ${this.getAverage()} - Result: ${this.getResult()}`
        }
    }
}


const student1 = createStudent("Goga", 16, [90, 95, 100])
const student2 = createStudent("Nika", 17, [70, 75, 80])
const student3 = createStudent("Zaza", 16, [40, 50, 60])


student1.addGrade(85)
console.log(student1.getAverage())
console.log(student1.getResult())
console.log(student1.getInfo())
student2.addGrade(95)
console.log(student2.getAverage())
console.log(student2.getResult())
console.log(student2.getInfo())
student3.addGrade(80)
console.log(student3.getAverage())
console.log(student3.getResult())
console.log(student3.getInfo())