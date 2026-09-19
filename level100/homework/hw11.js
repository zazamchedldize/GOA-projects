// 11)const text = "JavaScript is fun and JavaScript is powerful";

// შექმენი ფუნქცია analyzeText, რომელსაც გადაეცემა სტრინგი.

// ფუნქციამ უნდა:

// ციკლის გამოყენებით დაბეჭდოს სტრინგის თითოეული სიმბოლო.

// დათვალოს სტრინგში არსებული "a" ასოების რაოდენობა.

// დათვალოს სტრინგში არსებული გამოტოვებების რაოდენობა.

// გამოიყენოს if და შეამოწმოს, არის თუ არა სიმბოლო ხმოვანი ასო.

// იპოვოს პირველი გამოტოვება და შეწყვიტოს ციკლი break-ის გამოყენებით.

// დაბეჭდოს სტრინგი უკუღმა.


const text = "JavaScript is fun and JavaScript is powerful"

function analyzeText(string) {
    let a = 0
    let space = 0
    let vowels = "aeiouAEIOU"
    for(let i = 0; i < string.length; i++) {
        console.log(string[i])
        if(string[i] === "a") {
            a++
        }
        if(string[i] === " ") {
            space++
            console.log("first space")
            break
        }
        if(vowels.includes(string[i])) {
            console.log("vowel")
        }
    }

    for(let i = string.length - 1; i >= 0; i--) {
        console.log(string[i])
    }
}
analyzeText(text)