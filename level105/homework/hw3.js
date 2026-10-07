// 3)let names = ["nika", "ana", "gio", "mariam", "luka"];

// .map()-ით შექმენი ახალი სია, სადაც ყველა სახელი იქნება დიდი ასოებით.

// ["NIKA", "ANA", "GIO", "MARIAM", "LUKA"]


let names = ["nika", "ana", "gio", "mariam", "luka"]

let newArray = names.map((item) => {
    return item.toUpperCase()
})

console.log(newArray)