// 1) let items = ["goga" , 10 , "Tbilisi" , "programming" , false , 10.5  , "cake"]

// თქვენი დავალებაა რომ მოახდინოთ ამ სიის დესტრუქცია და ამოიღოთ ამ სიიდან მხოლოდ და მხოლოდ --> goga , Tbilisi , false , cake და შეინახოთ თქვენთვის სასურველ ცვლადებში , დანარჩენი ელემენტები გამოტოვეთ და არანაირ ცვლადში არ შეინახოთ , გამოიტანეთ ყველა ცვლადში შენახული მნშვენლობა კონსოლში


let items = ["goga" , 10 , "Tbilisi" , "programming" , false , 10.5  , "cake"]

let [name, , city, , boolean, , dessert] = items

console.log(name)
console.log(city)
console.log(boolean)
console.log(dessert)