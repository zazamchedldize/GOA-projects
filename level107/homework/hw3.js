// 3)const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];


// 1. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
// 2. map() — თითოეული რიცხვი გაამრავლე 3-ზე.
// 3. filter() — მიღებული მასივიდან დატოვე მხოლოდ 50-ზე მეტი რიცხვები.
// 4. reduce() — იპოვე დარჩენილი რიცხვების ჯამი.
// 5. findIndex() — იპოვე თავდაპირველ მასივში პირველი რიცხვის ინდექსი, რომელიც 20-ზე მეტია.
// 6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 40-ზე მეტი რიცხვი.
// 7. every() — შეამოწმე, არის თუ არა ყველა რიცხვი დადებითი.
// 8. forEach() — დაბეჭდე საბოლოო მასივის თითოეული რიცხვი.



const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11]

let num1 = numbers.filter(item => item % 2 === 0)
let num2 = num1.map(item => item * 3)
let num3 = num2.filter(item => item > 50)
let num4 = num3.reduce((acc, curr) => acc + curr, 0)
let num5 = numbers.findIndex(item => item > 20)
let num6 = numbers.some(item => item > 40)
let num7 = numbers.every(item => item > 0)

num3.forEach(item => console.log(item))
