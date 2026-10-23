// შექმენით ობიექტი სახელად person 

// ამ ობიექტში უნდა გქონდეთ შემდეგი property - ები 

// ====მარტივი ქიებით შექმენით===
// სახელი
// გვარი
// ასაკი
// ჰობი
// ====რთული ქიებით შექმენით===
// საყვარელი საჭმელი
// ფავორიტი ავტომობილი
// სასწავლო საგანი

// შენი დავალებაა რომ კონსოლში გამოიტანო ამ ობიექტის ყველა მნიშვნელობა

// მარტივი მნიშვნელობები გამოიტანეთ dot notation ით
// რთული მნიშვნელობები გამოიტანეთ bracket notation ით
// ბოლოს დაპრინტეთ მთლიანი ობიექტიც

let person = {
    name: "zaza",
    lastName: "mchedlidze",
    age: 16,
    hobby: "coding",
    "საყვარელი საჭმელი": "ხინკალი",
    "ფავორიტი ავტომობილი": "Mercedes",
    "სასწავლო საგანი": "მათემატიკა"
}

console.log(person.name)
console.log(person.lastName)
console.log(person.age)
console.log(person.hobby)

console.log(person["საყვარელი საჭმელი"])
console.log(person["ფავორიტი ავტომობილი"])
console.log(person["სასწავლო საგანი"])

console.log(person)