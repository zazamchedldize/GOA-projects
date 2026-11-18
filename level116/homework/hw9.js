// 9)let car = {
//     brand: "BMW",
//     model: "M5",
//     year: 2023,
//     color: "Black",
//     price: 85000,
//     isElectric: false
// };


// 1. შეინახე ყველა მნიშვნელობა ცვლადებში.
// 2. brand შეინახე carBrand ცვლადში.
// 3. model შეინახე carModel ცვლადში.
// 4. year შეინახე productionYear ცვლადში.
// 5. გამოიტანე მანქანის სრული დასახელება.
// 6. შეამოწმე, გამოშვებულია თუ არა მანქანა 2020 წლის შემდეგ.
// 7. შეამოწმე, არის თუ არა მანქანა ელექტრო.

let car = {
    brand: "BMW",
    model: "M5",
    year: 2023,
    color: "Black",
    price: 85000,
    isElectric: false
}

let {brand: carBrand, model: carModel, year: productionYear, color, price, isElectric} = car

console.log(`${carBrand} ${carModel}`)

if (productionYear > 2020) {
    console.log("Car was produced after 2020")
} else {
    console.log("Car was not produced after 2020")
}

if (isElectric) {
    console.log("Electric car")
} else {
    console.log("Not an electric car")
}