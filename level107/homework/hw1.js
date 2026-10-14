// 1)const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];


// შეასრულე შემდეგი მოქმედებები:
// 1. filter() — შექმენი ახალი მასივი, რომელშიც იქნება მხოლოდ 60-ზე მეტი ან ტოლი ქულები.
// 2. map() — თითოეულ ქულას დაუმატე 5 ქულა.
// 3. filter() — ახალი მასივიდან დატოვე მხოლოდ ის ქულები, რომლებიც 80-ზე მეტია.
// 4. reduce() — გამოთვალე საბოლოო მასივში დარჩენილი ქულების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 100-ქულიანი შედეგის ინდექსი.
// 6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 30-ზე ნაკლები ქულა.
// 7. every() — შეამოწმე, არის თუ არა ყველა ქულა 20-ზე მეტი.
// 8. forEach() — დაბეჭდე თითოეული საბოლოო ქულა ცალკე ხაზზე.



const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]

let scores1 = scores.filter(function(item) {
    return item >= 60
})

console.log(scores1)

let scores2 = scores1.map(function(item) {
    return item + 5
})

console.log(scores2)

let scores3 = scores2.filter(function(item) {
    return item > 80
})

console.log(scores3)

let sum = scores3.reduce(function(acc, curr) {
    return acc + curr
}, 0)

console.log(sum)

let scores4 = scores.findIndex(function(item) {
    return item === 100
})

console.log(scores4)

let scores5 = scores.some(function(item) {
    return item < 30
})

console.log(scores5)

let scores6 = scores.every(function(item) {
    return item > 20
})

console.log(scores6)

scores3.forEach(function(item) {
    console.log(item)
})
