// 7)Master Challenge

// მოცემულია:
// const numbers = [
//   18, 45, 72, 91, 34, 120, 57, 86,
//   103, 64, 39, 150, 77, 98, 25, 132
// ];


// შეასრულე შემდეგი მოქმედებები:
// 1. filter() — დატოვე 30-ზე მეტი რიცხვები.
// 2. map() — თითოეულ რიცხვს დაუმატე მისი ინდექსი ამ ახალ მასივში.
// 3. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
// 4. map() — ლუწ რიცხვებს დაუმატე 20, ხოლო კენტებს გამოაკელი 10. ამ ეტაპზე გამოიყენე ternary operator.
// 5. filter() — დატოვე 100-ზე მეტი შედეგები.
// 6. reduce() — გამოთვალე საბოლოო მასივის ჯამი.
// 7. reduce() — გამოთვალე საბოლოო მასივის საშუალო არითმეტიკული.
// 8. reduce() — იპოვე უდიდესი ელემენტი.
// 9. findIndex() — იპოვე საწყის მასივში პირველი 100-ზე ნაკლები ლუწი რიცხვის ინდექსი.
// 10. some() — შეამოწმე, არსებობს თუ არა საწყის მასივში 140-ზე მეტი რიცხვი.
// 11. every() — შეამოწმე, არის თუ არა საბოლოო მასივის ყველა ელემენტი 100-ზე მეტი და ლუწი.
// 12. forEach() — დაბეჭდე საბოლოო მასივის ყველა ელემენტი, ინდექსი და ის, არის თუ არა რიცხვი 200-ზე მეტი.
// 13. საბოლოოდ დაბეჭდე საწყისი მასივის ელემენტების რაოდენობა, საბოლოო მასივის ელემენტების რაოდენობა, მათი ჯამი და საშუალო არითმეტიკული.
//  #მთავარი წესი: თითოეულ ეტაპზე ახალი მასივი შეინახეთ ცალკე ცვლადში, რათა გაარჩიოთ საწყისი მონაცემები, შუალედური შედეგები და საბოლოო შედეგი. findIndex(), some() და every() გამოიყენეთ შესაბამისი მასივის შესამოწმებლად, ხოლო reduce() — ჯამის, ნამრავლის, საშუალოს ან უდიდესი მნიშვნელობის მისაღებად.


const numbers = [
  18, 45, 72, 91, 34, 120, 57, 86,
  103, 64, 39, 150, 77, 98, 25, 132
]

let num1 = numbers.filter(item => item > 30)

let num2 = num1.map((item, index) => item + index)

let num3 = num2.filter(item => item % 2 === 0)

let num4 = num3.map(item => item % 2 === 0 ? item + 20 : item - 10)

let num5 = num4.filter(item => item > 100)

let num6 = num5.reduce((acc, curr) => acc + curr, 0)

let num7 = num5.reduce((acc, curr) => acc + curr, 0) / num5.length

let num8 = num5.reduce((acc, curr) => curr > acc ? curr : acc, num5[0])

let num9 = numbers.findIndex(item => item < 100 && item % 2 === 0)

let num10 = numbers.some(item => item > 140)

let num11 = num5.every(item => item > 100 && item % 2 === 0)

num5.forEach((item, index) => {
  console.log(item, index, item > 200)
})

console.log(numbers.length)
console.log(num5)
console.log(num5.length)
console.log(num6)
console.log(num7)
console.log(num8)
console.log(num9)
console.log(num10)
console.log(num11)