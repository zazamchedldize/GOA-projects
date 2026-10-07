// 5)let numbers = [12, 7, 20, 15, 8, 31, 44];

// .forEach()-ის გამოყენებით დაბეჭდე მხოლოდ ლუწი რიცხვები.


let numbers = [12, 7, 20, 15, 8, 31, 44]

numbers.forEach((item) => {
    if(item % 2 === 0) {
        console.log(item)
    } 
})