// 8)შექმენი ფუნქცია countVowels, რომელსაც გადაეცემა სტრინგი.

// ციკლის გამოყენებით დათვალე, რამდენი ხმოვანი ასოა სტრინგში.

// გამოიყენე if და სტრინგის მეთოდი includes().

function countVowels(string) {
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if("aeiouAEIOU".includes(string[i])) {
            count++
        }
    }
}
console.log(count)
countVowels("hello world")