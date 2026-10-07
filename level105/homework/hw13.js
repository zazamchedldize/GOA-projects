// 13)let numbers = [5, 12, 25, 8, 40, 17];

// .map()-ით თითოეული რიცხვი შეცვალე შემდეგი წესით:

// 10-ზე ნაკლები → "Small"
// 10-დან 20-მდე → "Medium"
// 20-ზე მეტი → "Large"

// შემდეგ .forEach()-ით დაბეჭდე მიღებული მნიშვნელობები.

// მაგალითად:

// Small
// Medium
// Large
// Small
// Large
// Medium


let numbers = [5, 12, 25, 8, 40, 17]

let newNumbers = numbers.map((item) => {
    if(item < 10) {
        return "Small"
    } else if(item <= 20) {
        return "Medium"
    } else {
        return "Large"
    }
})

newNumbers.forEach((item) => {
    console.log(item)
})