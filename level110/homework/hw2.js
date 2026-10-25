// 2)შექმენი ობიექტი bankAccount:
// let bankAccount = {
//     owner: "Goga",
//     balance: 1500,
//     currency: "GEL"
// };

// დაამატე შემდეგი მეთოდები:
// 1. showBalance() — გამოიტანს ანგარიშის მფლობელსა და ბალანსს.
// 2. deposit(amount) — ანგარიშზე დაამატებს მითითებულ თანხას.
// 3. withdraw(amount) — ანგარიშიდან გამოიტანს მითითებულ თანხას, თუ საკმარისი თანხაა.
// 4. showInfo() — გამოიტანს ანგარიშის ყველა თვისებას.
// პირობა: თუ ანგარიშზე საკმარისი თანხა არ არის, გამოიტანე შეტყობინება "Not enough money!".




let bankAccount = {
    owner: "Goga",
    balance: 1500,
    currency: "GEL",
    showBalance() {
        console.log(bankAccount.owner, bankAccount.balance)
    },
    deposit(amount) {
        bankAccount.balance += amount
    },
    withdraw(amount) {
        if (bankAccount.balance >= amount) {
            bankAccount.balance -= amount
        } else {
            console.log("Not enough money!")
        }
    },
    showInfo() {
        console.log(bankAccount)
    }
}

bankAccount.showBalance()
bankAccount.deposit(400)
bankAccount.withdraw(300)
bankAccount.showInfo()
