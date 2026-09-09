// 7)let colors = ["red", "blue", "green", "yellow", "black"];

// splice()-ის გამოყენებით:

// წაშალე "green".
// "blue"-ს შემდეგ დაამატე "purple".
// "yellow" შეცვალე "orange"-ით.

// საბოლოოდ უნდა მიიღო:

// ["red", "blue", "purple", "orange", "black"]

let colors = ["red", "blue", "green", "yellow", "black"]
colors.splice(2, 1)
colors.splice(2, 0, "purple")
colors.splice(3, 1, "orange")

console.log(colors)