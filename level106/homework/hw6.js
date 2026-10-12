// 6) მოცემულია მასივი numbers = [5, 12, 45, 8, 20, 100, 33]. დატოვე მხოლოდ ის რიცხვები, რომლებიც არის 10-დან 50-მდე (10-ის და 50-ის ჩათვლით).

let numbers = [5, 12, 45, 8, 20, 100, 33]

let newList = numbers.filter(function(num) {
    if(num >= 10 && num <= 50) {
        return num
    }
})

console.log(newList)