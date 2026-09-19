// 13)შექმენი პროგრამა, რომელიც 1-დან 500-მდე ყველა რიცხვს გადაუვლის.

// იპოვე:

// რამდენი რიცხვია 3-ის ჯერადი;
// რამდენი რიცხვია 5-ის ჯერადი;
// რამდენი რიცხვია ერთდროულად 3-ის და 5-ის ჯერადი;
// ყველა იმ რიცხვის ჯამი, რომელიც არც 3-ის და არც 5-ის ჯერადი არ არის;
// ყველაზე დიდი რიცხვი, რომელიც 7-ზე იყოფა.


let three = 0
let five = 0
let fiveThree = 0
let max = 0
let sum = 0

for(let i = 1; i <= 500; i++) {
    if(i % 3 === 0) {
        three++
    }
    if(i % 5 === 0) {
        five++
    }
    if(i % 3 === 0 && i % 5 === 0) {
        fiveThree++
    }
    if(i % 3 !== 0 && i % 5 !== 0) {
        sum += i
    }
    if(i % 7 === 0 && i > max) {
        max = i
    }
}

console.log(three)
console.log(five)
console.log(fiveThree)
console.log(max)
console.log(sum)