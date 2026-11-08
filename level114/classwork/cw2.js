// 2)შექმენით ობიექტის ადაც იქნება name _email და _password ფროფერთიები

// თქვენი დავალებაა შექმნა პაროლისთივსიდ და ემაილისთვის ცალ ცალკე სეტერებნი და გეთერები , 

// შეცვლაეთ ორივეს მნიშვნელობა და ასევე დააბრუნებთ მგანახლებული მნშვნელობები

let person = {
    _name: "გიორგი",
    _email: "old_email@gmail.com",
    _password: "oldPassword123",
    get email() {
        return this._email
    },
    set email(newEmail) {
        if (newEmail.includes("@")) {
            this._email = newEmail
        } else {
            console.log("Invalid")
        }
    },
    get password() {
        return this._password
    },
    set password(newPassword) {
        if (newPassword.length >= 6) {
            this._password = newPassword
        } else {
            console.log("Invalid")
        }
    }
}

person.email = "new_email@gmail.com"
person.password = "newpassword2026"
console.log(person.email)
console.log(person.password)