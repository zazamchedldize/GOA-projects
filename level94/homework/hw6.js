// 6)შექმენი analyzeText multi-line Arrow Function.

// ფუნქციამ მიიღოს ტექსტი და დაკონსოლოს:

// ტექსტის სიგრძე
// uppercase ფორმა
// იწყება თუ არა "Hello"-თი

const analyzeText = text => {
    console.log(text.length)
    console.log(text.toUpperCase())
    console.log(text.startsWith("Hello"))
}