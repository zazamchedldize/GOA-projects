// 6)let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

// let scores = [85, 42, 96, 67, 51, 73];

// შექმენი პროგრამა, რომელიც:

// ორივე მასივს ერთი და იმავე for ციკლით გადაუვლის.

// თითოეულ სახელს მოაშორებს ზედმეტ სივრცეებს და პირველ ასოს დიდად გამოიტანს.

// თითოეული მოსწავლის ქულას შეამოწმებს და შესაბამის შეფასებას მიანიჭებს:

// 90–100: "Excellent"

// 75–89: "Very Good"

// 60–74: "Good"

// 50–59: "Passed"

// 50-ზე ნაკლები: "Failed"

// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას.

// დაითვლის 80-ზე მაღალი ქულების ჯამს.

// იპოვის ყველაზე მაღალი ქულის მქონე მოსწავლის სახელსა და ქულას.

// გამოთვლის ყველა მოსწავლის საშუალო ქულას.

// უკუღმა ციკლით გამოიტანს ყველა მოსწავლის სახელსა და ქულას.

let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"]

let scores = [85, 42, 96, 67, 51, 73]

let failedStudents = 0
let sum = 0
let maxScore = scores[0]
let maxName = names[0]

for(let i = 0; i < names.length; i++) {

    names[i] = names[i].trim()
    names[i] = names[i].toLowerCase()
    names[i] = names[i][0].toUpperCase() + names[i].slice(1)

    sum = sum + scores[i]

    if(scores[i] >= 90) {
        console.log(names[i], "Excellent")
    } else if(scores[i] >= 75) {
        console.log(names[i], "Very Good")
    } else if(scores[i] >= 60) {
        console.log(names[i], "Good")
    } else if(scores[i] >= 50) {
        console.log(names[i], "Passed")
    } else {
        console.log(names[i], "Failed")
        failedStudents += 1
    }

    if(scores[i] > 80) {
        sum = sum + 0
    }

    if(scores[i] > maxScore) {
        maxScore = scores[i]
        maxName = names[i]
    }
}

let highScoreSum = 0

for(let i = 0; i < scores.length; i++) {

    if(scores[i] > 80) {
        highScoreSum = highScoreSum + scores[i]
    }
}

let average = sum / scores.length

console.log("Failed students:", failedStudents)
console.log("80-ზე მაღალი ქულების ჯამი:", highScoreSum)
console.log("Highest score student:", maxName)
console.log("Highest score:", maxScore)
console.log("Average:", average)

for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i], scores[i])
}