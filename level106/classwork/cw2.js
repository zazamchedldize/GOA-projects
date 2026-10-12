// 2) გაქვთ მოცემული მასივი let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]
// თქვენი დავალებაა filter გამოყენებით შექმნათ ორი ახალი მასივი, პირველი ქინება მასივი სადაც მხოლოდ არასრულწლოვნების ასაკი იქნება და მეორე პირიქით სრულწოვანის ასაკი.

let ages = [20, 15, 40, 53, 12, 32, 17, 18, 19, 33, 29, 85, 67]

let underage = ages.filter((item) => {
    return item < 18
})

let adult = ages.filter((item) => {
    return item >= 18
})

console.log(underage)
console.log(adult)