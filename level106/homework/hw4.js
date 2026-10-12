// 4) მოცემულია სახელების მასივი names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]. დატოვე მხოლოდ ის სახელები, რომლებიც იწყება ასო "ა"-თი (გამოიყენე .startsWith()

let names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]

let newList = names.filter(function(word) {
    if(word.startsWith("ა")) {
        return word
    }
})

console.log(newList)