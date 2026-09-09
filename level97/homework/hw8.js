// 8)let numbers = [5, 10, 15, 20, 25, 30];

// splice()-ის გამოყენებით:

// წაშალე 15 და 20;
// მათ ადგილას ჩასვი 100 და 200;
// შემდეგ ბოლოში არსებული 30 წაშალე.

let numbers = [5, 10, 15, 20, 25, 30]

numbers.splice(2,2)
numbers.splice(2,0,100, 200)
numbers.splice(5)

console.log(numbers)