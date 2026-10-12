// 2) მოცემულია სიტყვების მასივი fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]. დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 4 ასოზე მეტია.

let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]

let result = fruits.filter(function(word) {
    if(word.length > 4) {
        return word
    }
})

console.log(result)