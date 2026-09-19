// 7)მოცემულია მაღაზიის პროდუქტების სახელები, ფასები და გაყიდული რაოდენობები:

// let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"];

// let prices = [2500, 1800, 80, 150, 900, 300];

// let quantities = [3, 5, 20, 12, 4, 8];

// შექმენი პროგრამა, რომელიც:

// თითოეული პროდუქტისთვის გამოთვლის გაყიდვების თანხას — ფასი გამრავლებული გაყიდულ რაოდენობაზე.

// თუ პროდუქტის გაყიდვების თანხა 5000-ზე მეტია, გამოიტანს "High sales".

// თუ გაყიდვების თანხა 1000-დან 5000-მდეა, გამოიტანს "Medium sales".

// სხვა შემთხვევაში გამოიტანს "Low sales".

// დაითვლის ყველა პროდუქტის გაყიდვებიდან მიღებულ საერთო თანხას.

// დაითვლის იმ პროდუქტების რაოდენობას, რომელთა გაყიდული რაოდენობა 10-ზე მეტია.

// უკუღმა ციკლით გამოიტანს პროდუქტების სახელებსა და გაყიდვების თანხებს.

let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"]

let prices = [2500, 1800, 80, 150, 900, 300]

let quantities = [3, 5, 20, 12, 4, 8]

let total = 0
let moreThanTen = 0

for(let i = 0; i < products.length; i++) {

    let sales = prices[i] * quantities[i]

    if(sales > 5000) {
        console.log(products[i], "High sales")
    } else if(sales >= 1000) {
        console.log(products[i], "Medium sales")
    } else {
        console.log(products[i], "Low sales")
    }

    total = total + sales

    if(quantities[i] > 10) {
        moreThanTen += 1
    }
}

console.log("Total sales:", total)
console.log("Products with more than 10 sold:", moreThanTen)

for(let i = products.length - 1; i >= 0; i--) {

    let sales = prices[i] * quantities[i]

    console.log(products[i], sales)
}