// 4)შექმენი checkWord multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს სიტყვა და:

// გადაიყვანოს lowercase-ში
// შეამოწმოს იწყება თუ არა "a"-თი
// თუ იწყება → დააბრუნოს "Starts with A"
// წინააღმდეგ შემთხვევაში → "Does not start with A"

let checkWord = word => {
    word = word.toLowerCase()
    if (word.startsWith("a")) {
        return "Starts with A"
    } else {
        return "Does not start with A"
    }
}

console.log(checkWord("Hello"))