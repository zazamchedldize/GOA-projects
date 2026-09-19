// 5)let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

// შექმენი პროგრამა, რომელიც:

// დაითვლის ყველა მოსწავლის ქულების ჯამს --> let sum = 0.

// გამოთვლის საშუალო ქულას --> შეინახეთ ცვლადდში --> avarage .

// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას. ჩაჭრილია მოსწავლე, რომელსაც 50-ზე ნაკლები ქულა აქვს  , მათ ოდენობა შეინახეთ ცვლადში failedStudents = 0.

// იპოვის ყველაზე მაღალ და ყველაზე დაბალ ქულას შეინახეთ ცვლადებში.

// მასივის ყველა ქულას შეამოწმებს და დაბეჭდავს --> :

// 90 ან მეტი — "Excellent"

// 70-დან 89-მდე — "Good"

// 50-დან 69-მდე — "Passed"

// 50-ზე ნაკლები — "Failed"

// შექმნის ახალ მასივს, რომელშიც მხოლოდ 80-ზე მაღალი ქულები იქნება დაგჭირდებათ ცარიელი მასივი და .push().

// უკუღმა ციკლით დაბეჭდავს ყველა ქულას.

// დაითვლის, რამდენი მოსწავლე იღებს საშუალოზე მაღალ ქულას--> შეადარებთ სიის თითოეულ ელემენტს ზემოთ გამოთვლილ საშვალო ქულას და დაითვლით ცვლადში moreThanAvarageScoreCount = 0.


let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95]

let sum = 0
let avarage
let failedStudents = 0
let max = scores[0]
let min = scores[0]

for(let i = 0; i < scores.length; i++) {

    sum = sum + scores[i]

    if(scores[i] < 50) {
        failedStudents += 1
    }

    if(scores[i] > max) {
        max = scores[i]
    }

    if(scores[i] < min) {
        min = scores[i]
    }

    if(scores[i] >= 90) {
        console.log("Excellent")
    } else if(scores[i] >= 70) {
        console.log("Good")
    } else if(scores[i] >= 50) {
        console.log("Passed")
    } else {
        console.log("Failed")
    }
}

avarage = sum / scores.length

console.log("Sum:", sum)
console.log("Average:", avarage)
console.log("Failed students:", failedStudents)
console.log("Max:", max)
console.log("Min:", min)