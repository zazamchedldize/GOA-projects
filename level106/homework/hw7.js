// 7) მოცემულია სიტყვები ["apple", "banana", "cherry", "date", "avocado"]. დატოვე მხოლოდ ის სიტყვები, რომლებიც შეიცავენ ასო "a"-ს.

let words = ["apple", "banana", "cherry", "date", "avocado"]

let newList = words.filter(function(word) {
    if(word.includes("a")) {
        return word
    }
})

console.log(newList)