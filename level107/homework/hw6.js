// 6)const scores = [
//   45, 88, 72, 96, 54, 100, 63, 81,
//   39, 92, 77, 68, 85, 49, 98, 59
// ];


// შექმენი პროგრამა შემდეგი მოთხოვნებით:
// 1. filter() — დატოვე 60 ან მეტი ქულა.
// 2. map() — თითოეულ ქულას დაუმატე 7.
// 3. filter() — დატოვე მხოლოდ 80 ან მეტი შედეგი.
// 4. map() — თითოეული შედეგიდან გამოაკელი მისი ინდექსი მიმდინარე მასივში.
// 5. filter() — დატოვე მხოლოდ კენტი რიცხვები.
// 6. reduce() — გამოთვალე საბოლოო შედეგების ჯამი.
// 7. reduce() — გამოთვალე საბოლოო შედეგების საშუალო არითმეტიკული.
// 8. findIndex() — იპოვე საწყის მასივში პირველი ქულა, რომელიც 90-ზე მეტია.
// 9. some() — შეამოწმე, არის თუ არა საბოლოო მასივში 90-ზე ნაკლები რიცხვი.
// 10. every() — შეამოწმე, არის თუ არა ყველა საბოლოო შედეგი 70-ზე მეტი.
// 11. forEach() — თითოეული საბოლოო ქულა დაბეჭდე და მიუწერე "ჩააბარა", თუ 80 ან მეტია, სხვა შემთხვევაში — "ვერ ჩააბარა".


const scores = [
  45, 88, 72, 96, 54, 100, 63, 81,
  39, 92, 77, 68, 85, 49, 98, 59
]

let scores1 = scores.filter(item => item >= 60)

let scores2 = scores1.map(item => item + 7)

let scores3 = scores2.filter(item => item >= 80)

let scores4 = scores3.map((item, index) => item - index)

let scores5 = scores4.filter(item => item % 2 !== 0)

let scores6 = scores5.reduce((acc, curr) => acc + curr, 0)

let scores7 = scores6 / scores5.length

let scores8 = scores.findIndex(item => item > 90)

let scores9 = scores5.some(item => item < 90)

let scores10 = scores5.every(item => item > 70)

scores5.forEach(item => {
  if (item >= 80) {
    console.log(item, "ჩააბარა")
  } else {
    console.log(item, "ვერ ჩააბარა")
  }
})

console.log(scores1)
console.log(scores2)
console.log(scores3)
console.log(scores4)
console.log(scores5)
console.log(scores6)
console.log(scores7)
console.log(scores8)
console.log(scores9)
console.log(scores10)