// 6)let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// slice()-ით მიიღე:

// [30, 40, 50, 60]

// შემდეგ მიიღე:

// [50, 60, 70, 80]

// ორიგინალი მასივი უცვლელი უნდა დარჩეს.

let numbers = [10, 20, 30, 40, 50, 60, 70, 80]

let newNumbers1 = numbers.slice(2,6)
let newNumbers2 = numbers.slice(4,8)

console.log(newNumbers1)
console.log(newNumbers2)