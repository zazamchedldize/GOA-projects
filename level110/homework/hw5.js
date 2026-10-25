// 5)let student = {
//     name: "Nika",
//     scores: [85, 90, 70, 100]
// };

// დაამატე შემდეგი მეთოდები:
// 1. showScores() — გამოიტანს ყველა ქულას.
// 2. addScore(score) — დაამატებს ახალ ქულას მასივში.
// 3. calculateAverage() — გამოთვლის ქულების საშუალო არითმეტიკულს და დააბრუნებს შედეგს.
// 4. getHighestScore() — დააბრუნებს ყველაზე მაღალ ქულას.
// 5. getLowestScore() — დააბრუნებს ყველაზე დაბალ ქულას.


let student = {
    name: "Nika",
    scores: [85, 90, 70, 100],
    showScores() {
        console.log(student.scores)
    },
    addScore(score) {
        student.scores.push(score)
    },
    calculateAverage() {
        let sum = 0
        for (let i = 0; i < student.scores.length; i++) {
            sum += student.scores[i]
        }
        return sum / student.scores.length
    },
    getHighestScore() {
        return Math.max(...student.scores)
    },
    getLowestScore() {
        return Math.min(...student.scores)
    }
}

student.showScores()
student.addScore(95)
student.showScores()
console.log("Average:", student.calculateAverage())
console.log("Highest:", student.getHighestScore())
console.log("Lowest:", student.getLowestScore())
