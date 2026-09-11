// 7)
// let products = [
//     ["Laptop", 2500],
//     ["Phone", 1500],
//     ["Mouse", 80],
//     ["Keyboard", 120]
// ];
// შექმენი ფუნქცია updateProducts(products).
// ფუნქციამ უნდა:

// "Laptop"-ის ფასი შეცვალოს 2300-ზე;
// "Mouse"-ის ფასი გაზარდოს 100-მდე;
// "Phone"-ის შემდეგ ჩასვას:["Tablet", 900]
// წაშალოს ბოლო პროდუქტი
// დააბრუნოს საბოლოო სია

let products = [["Laptop", 2500],["Phone", 1500],["Mouse", 80],["Keyboard", 120]]

function updateProducts(products) {
    products[0][1] = 2300
    products[1][1] += 100
    products.splice(1,0,["Tablet",900])
    products.pop()
    return products
}