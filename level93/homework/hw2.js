// 2)შექმენი ფუნქცია getResult(name, score).

// ფუნქციამ უნდა დააბრუნოს:

// თუ ქულა 90 ან მეტია → "name: Excellent"
// თუ 70–89 → "name: Good"
// თუ 50–69 → "name: Passed"
// თუ 50-ზე ნაკლებია → "name: Failed"

// score თუ არ გადაეცა, default მნიშვნელობა იყოს 0.

// გამოიძახეთ ფუნქცია სხვადასხვა არგუმენტებით 


function getResult(name,score = 0) {
    if(score >= 90) {
        console.log("name:Excellent")
    } else if(score >= 70 && score <= 89) {
        console.log("name:Good")
    } else if(score >= 50 && score <= 69) {
        console.log("name:Passed")
    } else if (score < 50) {
        console.log("name:Failed")
    }
}

console.log(getResult("zaza", 40))
console.log(getResult("zaza", 80))
console.log(getResult("zaza", 95))
console.log(getResult("zaza"))