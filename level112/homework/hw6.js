// 6)let products = [
//     { name: "Laptop", price: 2500, rating: 4.8 },
//     { name: "Mouse", price: 80, rating: 3.5 },
//     { name: "Keyboard", price: 180, rating: 4.6 },
//     { name: "Monitor", price: 900, rating: 4.2 },
//     { name: "Headphones", price: 350, rating: 4.9 },
//     { name: "Tablet", price: 1200, rating: 3.8 }
// ];


// მოთხოვნები:
// 1. filter()-ით შეარჩიე პროდუქტები, რომელთა ფასი 100 ლარზე მეტია.
// 2. forEach()-ით თითოეული შერჩეული პროდუქტის სახელი და ფასი გამოიტანე.
// 3. Ternary operator-ის გამოყენებით შეამოწმე რეიტინგი: თუ რეიტინგი 4.5 ან მეტია, გამოიტანე "Excellent", სხვა შემთხვევაში — "Good".
// 4. თითოეული პროდუქტისთვის გამოიტანე სახელი, ფასი და შეფასება.



let products = [
    { name: "Laptop", price: 2500, rating: 4.8 },
    { name: "Mouse", price: 80, rating: 3.5 },
    { name: "Keyboard", price: 180, rating: 4.6 },
    { name: "Monitor", price: 900, rating: 4.2 },
    { name: "Headphones", price: 350, rating: 4.9 },
    { name: "Tablet", price: 1200, rating: 3.8 }
]

let newList = products.filter(item => {
    return item.price > 100
})

newList.forEach(item => {
    console.log(item.name, item.price)
    console.log(item.rating >= 4.5 ? "Excellent": "Good")
    console.log(item.name, item.price, item.rating)
})