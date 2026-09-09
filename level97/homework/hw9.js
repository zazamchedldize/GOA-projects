// 9)let fruits = ["apple", "banana", "orange", "kiwi", "mango"];

// toSpliced()-ით შექმენი ახალი მასივი, სადაც:

// "orange" წაშლილია;
// მის ადგილას არის "watermelon".

// შემდეგ დაბეჭდე ორიგინალი და ახალი მასივი, რათა დარწმუნდე, რომ ორიგინალი არ შეცვლილა.

let fruits = ["apple", "banana", "orange", "kiwi", "mango"]
let newFruits = fruits.toSpliced(2, 1, "watermelon")

console.log(fruits)
console.log(newFruits)