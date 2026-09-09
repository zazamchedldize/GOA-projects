// 9)შექმენი validateUser multi-line Arrow Function-ის სახით.

// მიიღოს:

// username, age, password

// შეამოწმოს:

// username ცარიელი არ არის
// age არის 18 ან მეტი
// password-ის სიგრძე მინიმუმ 8-ია

// თუ ყველაფერი სწორია:

// "User is valid"

// თუ რომელიმე პირობა არ შესრულდა:

// "User is invalid"

const validateUser = (username,age,password) => {
    if(username.length >= 1 && age >= 18 && password.length >= 8) {
        return "User is valid"
    } else {
        return "User is invalid"
    }
}

console.log(validateUser("zaza",15,"hsdgsd32"))