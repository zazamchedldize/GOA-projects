// 8) მოცემულია შერეული მასივი list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]. გაფილტრე ყველა ტიპი სათითაოდ string-ისთვი ცალკე შექმენი ახალი მასივი ასვე number და boolean-ისთვის კიდევ ცალკე, ჯამში 3 ახალი მასივი უნდა ჰქინდეს stringList,numberList,booleanList.


let list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]

let stringList = list.filter(function(check) {
    return typeof check === "string"
})

let numberList = list.filter(function(check) {
    return typeof check === "number"
})

let booleanList = list.filter(function(check) {
    return typeof check === "boolean"
})

console.log(stringList)
console.log(numberList)
console.log(booleanList)
