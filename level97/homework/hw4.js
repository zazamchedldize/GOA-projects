// 4)let messages = ["Hello", "How are you?", "Goodbye"];
// ამოიღე პირველი შეტყობინება.
// დასაწყისში დაამატე "Important!".
// დასაწყისში დაამატე "Warning!".
// ბოლოს დაამატე "See you!".
// ბოლოს ამოიღე ბოლო შეტყობინება.

// დაბეჭდე საბოლოო შედეგი.

let messages = ["Hello", "How are you?", "Goodbye"]

messages.shift()
messages.unshift("Important!")
messages.unshift("Warning!")
messages.push("See you!")
messages.pop()

console.log(messages)