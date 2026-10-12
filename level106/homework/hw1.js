// 1) მოცემულია მასივი numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. გამოიყენე filter(), რომ მიიღო მხოლოდ ლუწი რიცხვების მასივი.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = numbers.filter(function(num) {
    if(num % 2 === 0) {
        return num
    }
})

console.log(result)