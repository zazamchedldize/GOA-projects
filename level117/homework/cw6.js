// 6)let school = {
//     schoolName: "Future Academy",
//     location: "Tbilisi",
//     students: [
//         ["Nika", 16, 90],
//         ["Ana", 17, 95],
//         ["Gio", 15, 75]
//     ],
//     subjects: ["Math", "English", "Programming"]
// };


// დავალება:
// 1. Object Destructuring-ით მიიღეთ schoolName, location, students და subjects.
// 2. Array Destructuring-ით subjects მასივიდან შეინახეთ სამივე საგანი ცალკე ცვლადში.
// 3. students მასივიდან Array Destructuring-ის გამოყენებით მიიღეთ პირველი მოსწავლის სახელი, ასაკი და ქულა.
// 4. იგივე გააკეთეთ მეორე მოსწავლისთვის.
// 5. გამოიტანეთ სკოლის სახელი, მდებარეობა და ორივე მოსწავლის ინფორმაცია.
// 6. შეამოწმეთ, აქვს თუ არა პირველ მოსწავლეს 80-ზე მეტი ქულა.


let school = {
    schoolName: "Future Academy",
    location: "Tbilisi",
    students: [
        ["Nika", 16, 90],
        ["Ana", 17, 95],
        ["Gio", 15, 75]
    ],
    subjects: ["Math", "English", "Programming"]
}

let {schoolName, location, students, subjects} = school

let [subject1, subject2, subject3] = subjects

let [name1, age1, score1] = students[0]

let [name2, age2, score2] = students[1]

console.log(schoolName)
console.log(location)
console.log(subject1)
console.log(subject2)
console.log(subject3)
console.log(name1)
console.log(age1)
console.log(score1)
console.log(name2)
console.log(age2)
console.log(score2)

if (score1 > 80) {
    console.log("Nika has more than 80 points")
} else {
    console.log("Nika has 80 or less points")
}