// 2)შექმენი Factory Function createBankAccount, რომელსაც გადაეცემა:
// - owner — ანგარიშის მფლობელი
// - balance — საწყისი თანხა
// - pin — ანგარიშის PIN კოდი
// დაბრუნებულ ობიექტს უნდა ჰქონდეს:
// 1. owner
// 2. deposit(amount) — თანხის დამატება.
//    - თანხა უნდა იყოს დადებითი.
// 3. withdraw(amount, enteredPin) — თანხის გამოტანა.
//    - ჯერ უნდა შემოწმდეს PIN კოდი.
//    - თუ PIN არასწორია, გამოიტანოს "Incorrect PIN!".
//    - თუ თანხა ბალანსზე მეტია, გამოიტანოს "Not enough money!".
//    - სხვა შემთხვევაში შეამციროს ბალანსი.
// 4. getBalance() — დააბრუნოს მიმდინარე ბალანსი.
// 5. changePin(oldPin, newPin) — PIN-ის შეცვლა.
//    - ძველი PIN უნდა ემთხვეოდეს არსებულს.
//    - ახალი PIN უნდა შედგებოდეს ზუსტად 4 სიმბოლოსგან.
// შექმენი ორი საბანკო ანგარიში და შეამოწმე ყველა მეთოდი.

function createBankAccount(owner, balance, pin) {
    return {
        owner: owner,
        balance: balance,

        deposit(amount) {
            if(amount > 0) {
                this.balance += amount
            }
        },

        withdraw(amount, enteredPin) {
            if(enteredPin === pin) {
                if(amount > this.balance) {
                    console.log("Not enough money!")
                } else {
                    this.balance -= amount
                }
            } else {
                console.log("Incorrect PIN!")
            }
        },

        getBalance() {
            return this.balance
        },

        changePin(oldPin, newPin) {
            if(oldPin === pin) {
                if(newPin.length === 4) {
                    pin = newPin
                }
            }
        }
    }
}


const account1 = createBankAccount("Giorgi", 2500, "1234")
const account2 = createBankAccount("Zaza", 5000, "5678")

account1.deposit(500)
account1.withdraw(1000, "1234")
account1.withdraw(5000, "1234")
account1.withdraw(200, "0000")
console.log(account1.getBalance())
account1.changePin("1234", "4321")
account1.withdraw(500, "4321")
console.log(account1.getBalance())
account2.deposit(1000)
account2.withdraw(2000, "5678")
console.log(account2.getBalance())
account2.changePin("5678", "9876")
account2.withdraw(500, "9876")
console.log(account2.getBalance())