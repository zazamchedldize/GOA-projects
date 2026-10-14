// 5)const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];


// შექმენი პროგრამა, რომელიც:
// 1. filter()-ით დატოვებს მხოლოდ 20-ზე მეტ რიცხვებს.
// 2. map()-ით თითოეულ მათგანს დაუმატებს მის ინდექსს გაფილტრულ მასივში.
// 3. filter()-ით მიღებული შედეგებიდან დატოვებს მხოლოდ ლუწ რიცხვებს.
// 4. map()-ით თითოეულ დარჩენილ რიცხვს გაამრავლებს 2-ზე.
// 5. reduce()-ით გამოთვლის საბოლოო მასივის ჯამს.
// 6. reduce()-ით იპოვის საბოლოო მასივის უდიდეს რიცხვს.
// 7. findIndex()-ით იპოვის თავდაპირველ მასივში პირველი რიცხვის ინდექსს, რომელიც 60-ზე მეტია.
// 8. some()-ით შეამოწმებს, არის თუ არა საბოლოო მასივში 200-ზე მეტი რიცხვი.
// 9. every()-ით შეამოწმებს, არის თუ არა საბოლოო მასივის ყველა რიცხვი ლუწი.
// 10. forEach()-ით დაბეჭდავს საბოლოო მასივის თითოეულ ელემენტს.

const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32]

let num1 = numbers.filter(item => item > 20)

let num2 = num1.map((item, index) => item + index)

let num3 = num2.filter(item => item % 2 === 0)

let num4 = num3.map(item => item * 2)

let num5 = num4.reduce((acc, curr) => acc + curr, 0)

let num6 = num4.reduce((acc, curr) => {
  if (curr > acc) {
    return curr
  } else {
    return acc
  }
}, num4[0])

let num7 = numbers.findIndex(item => item > 60)

let num8 = num4.some(item => item > 200)

let num9 = num4.every(item => item % 2 === 0)

num4.forEach(item => console.log(item))

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(num8)
console.log(num9)