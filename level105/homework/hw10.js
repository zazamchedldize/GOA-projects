// 10)let names = ["nika", "ana", "gio", "mariam", "luka"];

// .map()-ით ყველა სახელი გადაიყვანე uppercase-ში.

// შემდეგ .forEach()-ით დაბეჭდე:

// Student: NIKA
// Student: ANA
// Student: GIO
// ...


let names = ["nika", "ana", "gio", "mariam", "luka"]

let newNames = names.map((item) => {
    return item.toUpperCase()
})

newNames.forEach((item) => {
    console.log("Student: " + item)
})