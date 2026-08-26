// 10)შექმენი ფუნქცია:

// checkExam(name, score = 0)

// ფუნქციამ დააბრუნოს:

// 90–100 → "name: Excellent"
// 75–89 → "name: Very Good"
// 60–74 → "name: Good"
// 50–59 → "name: Passed"
// 0–49 → "name: Failed"

// თუ ქულა არ გადაეცა, ჩაითვალოს 0. შეასრულეთ switch ით -- hint --> switch(true){...}


function checkExam(name, score = 0) {
    switch (true) {
        case score >= 90 && score <= 100:
            return  "name: Excellent"
        case score >= 75 && score <= 89:
            return  "name: Very Good"
        case score >= 60 && score <= 74:
            return  "name: Good"
        case score >= 50 && score <= 59:
            return  "name: Passed"
        case score >= 0 && score <= 49:
            return  "name: Failed"
    }
}
console.log(checkExam("Zaza", 95))
console.log(checkExam("Zaza", 80))
console.log(checkExam("Zaza", 65))
console.log(checkExam("Zaza", 55))
console.log(checkExam("Zaza", 30))
console.log(checkExam("Zaza"))