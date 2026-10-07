// 4)let numbers = [2, 5, 7, 10, 12];

// .map()-ის გამოყენებით შექმენი ახალი სია, სადაც თითოეული რიცხვი თავის თავზე იქნება გამრავლებული.


let numbers = [2, 5, 7, 10, 12]

let newArray = numbers.map((item) => {
    return item * item
})

console.log(newArray)