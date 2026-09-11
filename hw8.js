// 8)მოცემულია:
// let store = [
//     [
//         "Electronics",
//         [
//             ["Laptop", 2500, ["Black", "Silver"]],
//             ["Phone", 1500, ["Black", "White"]],
//             ["Tablet", 900, ["Gray", "Blue"]]
//         ]
//     ],

//     [
//         "Clothes",
//         [
//             ["T-Shirt", 80, ["Red", "Black", "White"]],
//             ["Jeans", 150, ["Blue", "Black"]],
//             ["Jacket", 300, ["Black", "Brown"]]
//         ]
//     ],

//     [
//         "Shoes",
//         [
//             ["Nike", 400, ["Black", "White"]],
//             ["Adidas", 350, ["White", "Blue"]],
//             ["Puma", 250, ["Black", "Red"]]
//         ]
//     ]
// ];

// შექმენი ფუნქცია:

// function manageStore(store) {
    
// }
// დავალება
// ფუნქციის შიგნით:

// წამოიღე "Phone"
// წამოიღე Phone-ის ფასი.
// წამოიღე Phone-ის მეორე ფერი.
// შეცვალე Tablet-ის ფასი 1000-ზე.
// Laptop-ის ფერების სიაში დაამატე "White".
// T-Shirt-ის მესამე ფერი შეცვალე "Green"-ით.
// Jeans-ის ფერების სიიდან წაშალე "Black"
// Nike-ის ფერების სიაში დასაწყისში დაამატე "Red"
// Puma-ის მეორე ფერი შეცვალე "Green"-ით.
// "Shoes" კატეგორიის პროდუქტების სიაში დაამატე ახალი პროდუქტი:
// ["New Balance", 450, ["Gray", "Black"]]
// "Clothes" კატეგორიიდან წაშალე "Jacket"
// slice()-ის გამოყენებით შექმენი ახალი სია, რომელიც შეიცავს მხოლოდ "Electronics" კატეგორიის პროდუქტებს.
// concat()-ის გამოყენებით "Shoes" კატეგორიის პროდუქტებს დაუმატე ახალი სია:
// [
//     ["Reebok", 280, ["Black", "White"]]
// ]

function manageStore(store) {
    console.log(store[0][1][1][0])
    console.log(store[0][1][1][1])
    console.log(store[0][1][1][2][1])
    store[0][1][2][1] = 1000
    store[0][1][0][2].push("White")
    store[1][1][0][2][2] = "Green"
    store[1][1][1][2].splice(1, 1)
    store[2][1][0][2].unshift("Red")
    store[2][1][2][2][1] = "Green"
    store[2][1].push(["New Balance", 450, ["Gray", "Black"]])
    store[1][1].splice(2, 1)
    let newElectronics = store[0][1].slice(0, 3)
    let newShoes = store[2][1].concat([
        ["Reebok", 280, ["Black", "White"]]
    ])
    return store
}