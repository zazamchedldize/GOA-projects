// ================ პირველი დავალება ==================

// 1)შექმენი ობიექტი bankAccount, რომელსაც ექნება შემდეგი თვისებები:
// - _owner — "Goga"
// - _balance — 2500
// - _pin — "1234"
// - _isBlocked — false
// შექმენი შემდეგი getter-ები და setter-ები:
// 1. owner
// - Getter-მა უნდა დააბრუნოს ანგარიშის მფლობელის სახელი.
// - Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ ახალი მნიშვნელობა სტრიქონია და ცარიელი არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე შეტყობინება: "Invalid owner name!"
// 2. balance
// - Getter-მა უნდა დააბრუნოს მიმდინარე ბალანსი.
// - Setter-მა უნდა მიიღოს ახალი ბალანსი, მაგრამ ცვლილება დაუშვას მხოლოდ მაშინ, თუ ახალი მნიშვნელობა რიცხვია და 0-ზე ნაკლები არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე "Invalid balance!"
// 3. pin
// - Getter-მა არასოდეს უნდა დააბრუნოს PIN-ის ნამდვილი მნიშვნელობა. მან უნდა დააბრუნოს "PIN is hidden".
// - Setter-მა ახალი PIN უნდა მიიღოს მხოლოდ მაშინ, თუ ის ოთხნიშნა სტრიქონია.
// - სხვა შემთხვევაში გამოიტანე "PIN must contain exactly 4 digits!"
// 4. accountStatus — მხოლოდ Getter
// - თუ _isBlocked არის true, დააბრუნოს "Blocked".
// - სხვა შემთხვევაში დააბრუნოს "Active".
// 5. deposit — მხოლოდ Setter
// - Setter-მა მიიღოს თანხა და დაამატოს ბალანსს.
// - თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
// - თუ ანგარიში დაბლოკილია, თანხის დამატება არ უნდა მოხდეს.
// - არასწორი თანხის შემთხვევაში გამოიტანე "Invalid deposit amount!"
// - დაბლოკილი ანგარიშის შემთხვევაში გამოიტანე "Account is blocked!"
// 6. withdraw — მხოლოდ Setter
// - Setter-მა მიიღოს გასატანი თანხა.
// - თანხა უნდა იყოს 0-ზე მეტი და ბალანსზე ნაკლები ან მისი ტოლი.
// - დაბლოკილი ანგარიშიდან თანხის გატანა არ უნდა შეიძლებოდეს.
// - არასაკმარისი თანხის შემთხვევაში გამოიტანე "Insufficient balance!"


let bankAccount = {
    _owner: "Goga",
    _balance: 2500,
    _pin: "1234",
    _isBlocked: false,

    get owner() {
        return this._owner
    },

    set owner(newOwner) {
        if(typeof newOwner === "string" && newOwner !== "") {
            this._owner = newOwner
        } else {
            console.log("Invalid owner name!")
        }
    },

    get balance() {
        return this._balance
    },

    set balance(newBalance) {
        if(typeof newBalance === "number" && newBalance >= 0) {
            this._balance = newBalance
        } else {
            console.log("Invalid balance!")
        }
    },

    get pin() {
        return "PIN is hidden"
    },

    set pin(newPin) {
        if(typeof newPin === "string" && /^[0-9]{4}$/.test(newPin)) {
            this._pin = newPin
        } else {
            console.log("PIN must contain exactly 4 digits!")
        }
    },

    get accountStatus() {
        if(this._isBlocked) {
            return "Blocked"
        } else {
            return "Active"
        }
    },

    set deposit(amount) {
        if(typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount!")
        } else if(this._isBlocked) {
            console.log("Account is blocked!")
        } else {
            this._balance += amount
        }
    },

    set withdraw(amount) {
        if(this._isBlocked) {
            console.log("Account is blocked!")
        } else if(typeof amount !== "number" || amount <= 0) {
            console.log("Insufficient balance!")
        } else if(amount > this._balance) {
            console.log("Insufficient balance!")
        } else {
            this._balance -= amount
        }
    }
}


console.log(bankAccount.owner)
bankAccount.owner = "Nika"
console.log(bankAccount.balance)
bankAccount.balance = 3000
console.log(bankAccount.pin)
bankAccount.pin = "5678"
console.log(bankAccount.accountStatus)
bankAccount.deposit = 500
console.log(bankAccount.balance)
bankAccount.withdraw = 1000
console.log(bankAccount.balance)