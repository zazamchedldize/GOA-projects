// ===============მესამე დავალება =============

// შექმენი ობიექტი storeAccount, რომელსაც ექნება შემდეგი თვისებები:
// - _username — "Goga"
// - _email — "goga@gmail.com"
// - _balance — 1800
// - _password — "goga1234"
// - _isActive — true
// - _loginAttempts — 0
// შექმენი შემდეგი Getter-ები და Setter-ები:

// 1. username
// - Getter-მა უნდა დააბრუნოს მომხმარებლის სახელი.
// - Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ:
//   - მნიშვნელობა სტრიქონია;
//   - სიგრძე მინიმუმ 4 სიმბოლოა.
// - სხვა შემთხვევაში გამოიტანოს: "Invalid username!"
// 2. email
// - Getter-მა უნდა დააბრუნოს მომხმარებლის ელფოსტა.
// - Setter-მა უნდა მიიღოს ახალი ელფოსტა მხოლოდ მაშინ, თუ:
//   - მნიშვნელობა სტრიქონია;
//   - შეიცავს "@" სიმბოლოს;
//   - მთავრდება ".com"-ით.
// - სხვა შემთხვევაში გამოიტანოს: "Invalid email address!"
// 3. password
// - Getter-მა არასოდეს უნდა დააბრუნოს ნამდვილი პაროლი. დააბრუნოს "Password is protected".
// - Setter-მა ახალი პაროლი უნდა მიიღოს მხოლოდ მაშინ, თუ:
//   - სტრიქონია;
//   - შეიცავს მინიმუმ 8 სიმბოლოს;
//   - შეიცავს მინიმუმ ერთ ციფრს.
// - სხვა შემთხვევაში გამოიტანოს: "Weak password!"
// 4. accountStatus — მხოლოდ Getter
// - თუ _isActive არის true, დააბრუნოს "Account is active".
// - სხვა შემთხვევაში დააბრუნოს "Account is inactive".
// 5. login — მხოლოდ Setter
// - მიიღოს პაროლი.
// - თუ პაროლი ემთხვევა _password-ს:
//   - _loginAttempts გახდეს 0;
//   - გამოიტანოს "Login successful!".
// - თუ პაროლი არასწორია:
//   - _loginAttempts გაიზარდოს 1-ით;
//   - გამოიტანოს "Incorrect password!".
// - თუ არასწორი მცდელობების რაოდენობა მიაღწევს 3-ს, _isActive გახდეს false.




let storeAccount = {
    _username: "Goga",
    _email: "goga@gmail.com",
    _balance: 1800,
    _password: "goga1234",
    _isActive: true,
    _loginAttempts: 0,

    get username() {
        return this._username
    },

    set username(newUsername) {
        if(typeof newUsername === "string" && newUsername.length >= 4) {
            this._username = newUsername
        } else {
            console.log("Invalid username!")
        }
    },

    get email() {
        return this._email
    },

    set email(newEmail) {
        if(typeof newEmail === "string" && newEmail.includes("@") && newEmail.endsWith(".com")) {
            this._email = newEmail
        } else {
            console.log("Invalid email address!")
        }
    },

    get password() {
        return "Password is protected"
    },

    set password(newPassword) {
        let hasNumber = false

        if(typeof newPassword === "string" && newPassword.length >= 8) {
            for(let i = 0; i < newPassword.length; i++) {
                if(newPassword[i] >= "0" && newPassword[i] <= "9") {
                    hasNumber = true
                }
            }

            if(hasNumber) {
                this._password = newPassword
            } else {
                console.log("Weak password!")
            }
        } else {
            console.log("Weak password!")
        }
    },

    get accountStatus() {
        if(this._isActive) {
            return "Account is active"
        } else {
            return "Account is inactive"
        }
    },

    set login(enteredPassword) {
        if(!this._isActive) {
            console.log("Account is inactive")
        } else if(enteredPassword === this._password) {
            this._loginAttempts = 0
            console.log("Login successful!")
        } else {
            this._loginAttempts++
            console.log("Incorrect password!")

            if(this._loginAttempts >= 3) {
                this._isActive = false
            }
        }
    }
}



console.log(storeAccount.username)
storeAccount.username = "Nika"
console.log(storeAccount.username)
console.log(storeAccount.email)
storeAccount.email = "nika@gmail.com"
console.log(storeAccount.email)
console.log(storeAccount.password)
storeAccount.password = "nika12345"
console.log(storeAccount.password)
console.log(storeAccount.accountStatus)
storeAccount.login = "wrong123"
storeAccount.login = "wrong456"
storeAccount.login = "wrong789"
console.log(storeAccount.accountStatus)
console.log(storeAccount._loginAttempts)
storeAccount.login = "nika12345"
