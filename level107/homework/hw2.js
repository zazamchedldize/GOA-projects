// 2)მოცემულია გაყიდული ნივთების ფასები:
// const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];


// 1. filter() — დატოვე მხოლოდ 200-ზე მეტი ფასები.
// 2. map() — თითოეულ ფასს გამოაკელი 50.
// 3. map() — მიღებული ფასებიდან შექმენი ახალი მასივი, რომელშიც თითოეული ფასი გაორმაგებული იქნება.
// 4. reduce() — გამოთვალე გაორმაგებული ფასების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 500-ზე მეტი ფასი.
// 6. some() — შეამოწმე, არის თუ არა რომელიმე ფასი 1000-ზე მეტი.
// 7. every() — შეამოწმე, არის თუ არა ყველა ფასი 50-ზე მეტი.
// 8. forEach() — დაბეჭდე საბოლოო ფასები.



const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60]

let prices1 = prices.filter(item => item > 200)
let prices2 = prices1.map(item => item - 50)
let prices3 = prices2.map(item => item * 2)
let sum = prices3.reduce((acc, curr) => acc + curr, 0)
let prices4 = prices.findIndex(item => item > 500)
let prices5 = prices.some(item => item > 1000)
let prices6 = prices.every(item => item > 50)
prices3.forEach(item => console.log(item))

console.log(prices1)
console.log(prices2)
console.log(prices3)
console.log(sum)
console.log(prices4)
console.log(prices5)
console.log(prices6)
