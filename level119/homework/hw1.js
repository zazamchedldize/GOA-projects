// 1)let fruits = ["Apple", "Banana", "Orange"];
// let vegetables = ["Carrot", "Potato", "Tomato"];


// 1. Spread Operator-ის გამოყენებით გააერთიანე ორივე მასივი ახალ მასივში food.
// 2. დაამატე "Cucumber" მასივის დასაწყისში.
// 3. დაამატე "Mango" მასივის ბოლოში.
// 4. დაბეჭდე სამივე მასივი და შეამოწმე, შეიცვალა თუ არა საწყისი მასივები.

let fruits = ["Apple", "Banana", "Orange"]
let vegetables = ["Carrot", "Potato", "Tomato"]


let food = [...fruits, ...vegetables]

food.unshift("Cucumber")
food.push("Mango")

console.log(fruits, vegetables, food)