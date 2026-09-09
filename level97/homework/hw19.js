// 19let data = "apple,banana,orange,kiwi,mango";

// პირველ ეტაპზე მონაცემი მხოლოდ string-ია.

// დავალება:

// split()-ით გადააქციე მასივად.
// Array.isArray()-ით შეამოწმე მიღებული მონაცემი.
// push()-ით დაამატე "watermelon".
// unshift()-ით დაამატე "strawberry".
// pop()-ით ამოიღე ბოლო ელემენტი.
// shift()-ით ამოიღე პირველი ელემენტი.
// splice()-ით "orange" შეცვალე "peach"-ით.
// slice()-ით შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ შუა 3 ელემენტს.
// toSpliced()-ით შექმენი კიდევ ერთი ახალი მასივი, სადაც ერთი ელემენტი წაშლილია.
// concat()-ით შეუერთე:
// let extraFruits = ["grape", "melon"];
// join()-ით საბოლოო შედეგი გადააქციე ერთ სტრიქონად:
// apple | banana | peach | ...

let data = "apple,banana,orange,kiwi,mango"

data = data.split(",")
console.log(Array.isArray(data))
data.push("watermelon")
data.unshift("strawberry")
data.pop()
data.shift()
data.splice(2, 1, "peach")

let newList = data.slice(1, 4)
let newList2 = data.toSpliced(2, 1)
let extraFruits = ["grape", "melon"]
let newList3 = newList.concat(extraFruits)
let newList4 = newList3.join(" | ")

console.log(newList4)