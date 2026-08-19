// 11)let action = "withdraw";
// let balance = 500;
// let amount = 200;

// switch-ით შექმენი ATM-ის სისტემა:

// "balance" → 
// აჩვენოს ბალანსი
// "deposit" → 
// დაამატოს თანხა
// "withdraw" → 
// გამოაკლოს თანხა
// "exit" → "Goodbye"

// მაგრამ withdraw-ის დროს:

// თუ თანხა ბალანსზე მეტია → "Insufficient balance"
// თუ საკმარისი თანხაა → გამოაკლოს
// საბოლოოდ 
// აჩვენოს დარჩენილი ბალანსი.

// შეზღუდვა: მოქმედების არჩევისთვის გამოიყენე switch, ხოლო თანხის საკმარისობის შესამოწმებლად შეგიძლია გამოიყენო if ან ternary.

let action = "withdraw"
let balance = 500
let amount = 200

switch (action) {
    case "balance":
        console.log(balance)
        break
    case "deposit":
        balance = balance + amount
        console.log(balance)
        break
    case "withdraw":
        if (amount > balance) {
            console.log("Insufficient balance")
        } else {
            balance = balance - amount
            console.log(balance)
        }
        break
    case "exit":
        console.log("Goodbye")
        break
    default:
        console.log("Invalid action")
        break
}