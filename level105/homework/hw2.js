// 2)let scores = [45, 72, 91, 38, 64, 87];

// .map()-ით შექმენი ახალი სია.

// თუ ქულა 50-ზე ნაკლებია → დაამატე 10
// სხვა შემთხვევაში → ქულა დატოვე უცვლელი

// შედეგი უნდა იყოს:

// [55, 72, 91, 48, 64, 87]


let scores = [45, 72, 91, 38, 64, 87]

let newArray = scores.map((item) => {
    if(item < 50) {
        return item += 10
    } else{
        return item
    }
})

console.log(newArray)