// 4)let first = [5, 10, 15];
// let second = [20, 25, 30];
// let third = [35, 40, 45];


// 1. გააერთიანე სამივე მასივი allNumbers მასივში.
// 2. შექმენი ახალი მასივი newNumbers, სადაც ჯერ იქნება third, შემდეგ first, ბოლოს second.
// 3. ახალი მასივის დასაწყისში დაამატე 0.
// 4. ბოლოში დაამატე 50 და 55.
// 5. საწყისი მასივები უცვლელი უნდა დარჩეს.

let first = [5, 10, 15]
let second = [20, 25, 30]
let third = [35, 40, 45]

let allNumbers = [...first, ...second, ...third]
let newNumbers = [...third, ...first, ...second]

newNumbers.unshift(0)

newNumbers.push(50, 55)

console.log(first)
console.log(second)
console.log(third)
console.log(allNumbers)
console.log(newNumbers)