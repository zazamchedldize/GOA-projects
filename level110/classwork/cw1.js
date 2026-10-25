// შექმენით ობიექტი სახელად product სადაც შეინახავ შემდეგ ქიებს(მნიშვნელობა თქვენით მოუფიქრეთ) --> productName , price , quantity , inStock(მიანჭეთ ბულეანი) , 

// ქვემოთ შექმენით მეთოდი სახელად allProdPrice() რომელიც დააბრუნებს ობიექტში მყოფ მთლიანი პროდუქტების ფასის ჯამს(დაფიქრდით ამისთვის რაუნდა გააკეთოთ)

// შემდეგ შექმენი შემდეგი მეთოდი isStock() რომელიც ტერნარი ოპერატორით შეამოწმებს თუ inStock არის true მაშინ დააბრუნოს "yes we have this nproduct" სხვა შემთვევაში "no we dont have this product" გამოიძახეთ ორივე მეთოდი და ნახეთ შედეგი



let product = {
    productName: "Phone",
    price: 1500,
    quantity: 15,
    inStock: true,

    allProdPrice() {
        return product.price * product.quantity
    },

    isStock() {
        return product.inStock ? "yes we have this product": "no we dont have this product"
    }
}

console.log(product.allProdPrice())
console.log(product.isStock())
