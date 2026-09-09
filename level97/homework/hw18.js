// 18)let cart = ["Phone", "Laptop", "Mouse"];

// გააკეთე შემდეგი:

// push() → დაამატე "Keyboard".
// unshift() → დასაწყისში დაამატე "USB Cable".
// pop() → წაშალე ბოლო პროდუქტი.
// shift() → წაშალე პირველი პროდუქტი.
// splice() → "Mouse" შეცვალე "Headphones"-ით.
// slice() → შექმენი კალათის პირველი 2 პროდუქტის ახალი მასივი.
// concat() → შეუერთე მეორე სია:
// let extraProducts = ["Webcam", "Microphone"];
// join() → საბოლოო კალათა გადააქციე ერთ ტექსტად, სადაც პროდუქტები გამოყოფილია " | "-ით.


let cart = ["Phone", "Laptop", "Mouse"]

cart.push("Keyboard")
cart.unshift("USB Cable")
cart.pop()
cart.shift()
cart.splice(2,1,"Headphones")
let newCart = cart.slice(0,2)

let extraProducts = ["Webcam", "Microphone"]

let newList = newCart.concat(extraProducts)

let newList2 = newList.join(" | ")
console.log(newList2)