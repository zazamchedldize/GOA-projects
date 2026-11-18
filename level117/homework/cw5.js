// 5)let product = {
//     title: "Gaming Laptop",
//     price: 2500,
//     specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
//     colors: ["Black", "White", "Gray"]
// };


// დავალება:
// 1. Object Destructuring-ით მიიღეთ title, price, specifications და colors.
// 2. specifications მასივიდან ცალკე ცვლადებში შეინახეთ სამივე მახასიათებელი.
// 3. colors მასივიდან შეინახეთ პირველი და მესამე ფერი.
// 4. კონსოლში გამოიტანეთ პროდუქტის სრული ინფორმაცია.
// 5. თუ ფასი 2000-ზე მეტია, გამოიტანეთ "Expensive Product", სხვა შემთხვევაში "Affordable Product".


let product = {
    title: "Gaming Laptop",
    price: 2500,
    specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
    colors: ["Black", "White", "Gray"]
}

let {title, price, specifications, colors} = product

let [ram,ssd,rtx] = specifications

let [color1, , color3] = colors

console.log(title)
console.log(price)
console.log(specifications)
console.log(colors)
console.log(ram,ssd,rtx)
console.log(color1,color3)


if(price > 2000) {
    console.log("Expensive Product")
} else {
    console.log("Affordable Product")
}