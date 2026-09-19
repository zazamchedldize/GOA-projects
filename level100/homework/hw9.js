// 9)const numbers = [4, 8, 12, 25, 30, 40, 50];

// ციკლის გამოყენებით იპოვე პირველი რიცხვი, რომელიც 20-ზე მეტია.

// როგორც კი იპოვი, დაბეჭდე და შეწყვიტე ციკლის შესრულება break-ის გამოყენებით.


const numbers = [4, 8, 12, 25, 30, 40, 50]
let i = 0

while (i < numbers.length) {
    if(numbers[i] > 20) {
        console.log(numbers[i])
        break
    } 
    i++
}