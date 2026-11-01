// 5)let products = [
//     { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
//     { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
//     { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
//     { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
//     { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
//     { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
//     { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
// ];


// მოთხოვნები:
// 1. filter()-ის გამოყენებით შექმენი ახალი სია, რომელშიც მოხვდებიან პროდუქტები, რომელთა ფასი 200-ზე მეტია, მარაგში მინიმუმ 5 ცალია და რეიტინგი 4.5 ან მეტია.
// 2. მიღებულ სიაზე გამოიყენე forEach() და გამოიტანე თითოეული პროდუქტის სახელი, ფასი და რეიტინგი.
// 3. თითოეული პროდუქტისთვის გამოიტანე შეტყობინება შემდეგი ფორმატით:
// Laptop costs 2500 GEL, Rating: 4.8


// 4. ბოლოს გამოიტანე გაფილტრული პროდუქტების რაოდენობა.


let products = [
    { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
    { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
    { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
    { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
    { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
    { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
    { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
]


let newList = products.filter(item => {
    return item.price > 200 && item.stock >= 5 && item.rating >= 4.5
})

newList.forEach(item => {
    console.log(item.name, item.price, item.rating) 
    console.log(`${item.name} costs ${item.price} Gel, Rating: ${item.rating}`)
})

console.log(newList.length)