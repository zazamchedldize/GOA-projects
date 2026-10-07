// 14)let numbers = [10, 25, 4, 18, 33, 7, 40];

// უნდა გამოიყენო მხოლოდ .map() და .forEach().

// .map():

// თითოეული რიცხვი შეცვალე:

// თუ რიცხვი 20-ზე მეტია → გამოაკელი 5
// თუ რიცხვი 20-ზე ნაკლებია → დაუმატე 5
// თუ რიცხვი ზუსტად 20 იქნებოდა → გაამრავლე 2-ზე
// .forEach():

// თითოეულ მიღებულ რიცხვზე დაბეჭდე:

// Number: 20
// Number: 30
// ...


let numbers = [10, 25, 4, 18, 33, 7, 40]

let newNumbers = numbers.map((item) => {
    if(item > 20) {
        return item - 5
    } else if(item < 20) {
        return item + 5
    } else {
        return item * 2
    }
})

newNumbers.forEach((item) => {
    console.log("Number: " + item)
})