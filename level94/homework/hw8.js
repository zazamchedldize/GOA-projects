// 8)შექმენი validatePassword multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს პაროლი და შეამოწმოს:

// სიგრძე მინიმუმ 8 სიმბოლოა?
// შეიცავს თუ არა "@" სიმბოლოს?(მოიძიეთ საჭირო მეთოდი)
// იწყება თუ არა დიდი ასოთი?

// დააბრუნოს:

// "Strong password" — თუ სამივე პირობა სრულდება
// "Weak password" — სხვა შემთხვევაში

const validatePassword = password => {
    if (password.length >= 8 && password.includes("@") && password[0] === password[0].toUpperCase()) {
        return "Strong password"
    } else {
        return "Weak password"
    }
}

console.log(validatePassword("hello"))