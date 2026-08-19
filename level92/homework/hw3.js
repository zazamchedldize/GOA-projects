// 3)let number = -14;

// Ternary operator-ის გამოყენებით გამოიტანე:

// თუ რიცხვი 0-ზე მეტია → "Positive"
// თუ რიცხვი 0-ზე ნაკლებია → "Negative"
// თუ რიცხვი 0-ის ტოლია → "Zero"

// შემდეგ გაართულე:

// თუ დადებითია, დამატებით განსაზღვრე ლუწია თუ კენტი:

// Positive Even
// Positive Odd
// Negative
// Zero

let number = -14

number > 0 ? number % 2 == 0 ? console.log("Positive Even") : console.log("Positive Odd"): number < 0 ? console.log("Negative"): console.log("Zero")