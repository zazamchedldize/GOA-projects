// 4)შექმენი ფუნქცია shoppingCart(cart).

// ["Bread", "Milk", "Cheese", "Apple", "Juice"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Water";
// ბოლოში დაამატოს "Chocolate";
// ამოიღოს პირველი ელემენტი;
// splice()-ით "Cheese" ჩაანაცვლოს "Yogurt"-ით;
// slice()-ით შექმნას სიის პირველი 4 ელემენტის ასლი;
// დააბრუნოს ეს ახალი სია.

function shoppingCart(cart) {
    let list = ["Bread", "Milk", "Cheese", "Apple", "Juice"]
    list.unshift("Water")
    list.push("Chocolate")
    list.shift()
    list.splice(2,1,"Yogurt")
    let newList = list.slice(0,4)
    return newList
}