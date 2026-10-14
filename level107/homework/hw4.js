// 4)const words = [
//   "javascript",
//   "html",
//   "programming",
//   "css",
//   "developer",
//   "react",
//   "computer",
//   "code",
//   "algorithm"
// ];


// 1. filter() — დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 5 სიმბოლოზე მეტია.
// 2. map() — ყველა დარჩენილი სიტყვა გადაიყვანე დიდ ასოებში toUpperCase() მეთოდით.
// 3. filter() — მიღებული სიტყვებიდან დატოვე მხოლოდ ისინი, რომელთა სიგრძეც 8 სიმბოლოზე მეტია.
// 4. reduce() — გამოთვალე საბოლოო მასივში არსებული ყველა სიმბოლოს საერთო რაოდენობა. გამოიყენე word.length.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი სიტყვის ინდექსი, რომლის სიგრძეც 8-ზე მეტია.
// 6. some() — შეამოწმე, არსებობს თუ არა 10 სიმბოლოზე გრძელი სიტყვა.
// 7. every() — შეამოწმე, არის თუ არა ყველა სიტყვა მინიმუმ 3 სიმბოლოსგან შემდგარი.
// 8. forEach() — დაბეჭდე საბოლოო სიტყვები.


const words = [
  "javascript",
  "html",
  "programming",
  "css",
  "developer",
  "react",
  "computer",
  "code",
  "algorithm"
]

let words1 = words.filter(item => item.length > 5)

let words2 = words1.map(item => item.toUpperCase())

let words3 = words2.filter(item => item.length > 8)

let words4 = words3.reduce((acc, word) => acc + word.length, 0)

let words5 = words.findIndex(item => item.length > 8)

let words6 = words.some(item => item.length > 10)

let words7 = words.every(item => item.length >= 3)

words3.forEach(item => console.log(item))

console.log(words1)
console.log(words2)
console.log(words3)
console.log(words4)
console.log(words5)
console.log(words6)
console.log(words7)