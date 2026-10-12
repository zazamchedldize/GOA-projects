// 3) გაქვთ მოცემული მასივი numbers = [25,111,921,321,432,545,133,987,436]
// თქვენი დავალებაა შექმნა newNumber მასივი ჯერ .map გამოყენებით თუ რიცხვი ლუწია გაამრავლო 13
// თუ კენტია გაამრავლო 16, შემდგომ შექმნა ახალი მასივი onlyEven რომელსაც filter გაფილტრავთ newNumber მასივ და მხოლოდ ლუწებს შეინახავთ.

let numbers = [25, 111, 921, 321, 432, 545, 133, 987, 436]

let newNumber = numbers.map((item) => {
    if (item % 2 === 0) {
        return item * 13
    } else {
        return item * 16
    }
})

let onlyEven = newNumber.filter((item) => {
    return item % 2 === 0
})

console.log(newNumber)
console.log(onlyEven)