// 1)შექმენით სია და შეიყვანეთ სახელები , შენი დავალებაა while loop იითაც და do while ითაც გამოიტანო სიის ისეთ ელემენტები რომლბის სიგრძე ნაკლებია 4 ზე

let names = ["zaza", "giorgi", "nika", "ana", "saba", "gio", "lasha"]
let i = 0

while(i < names.length) {
    if(names[i].length < 4) {
        console.log(names[i])
    }
    i++
}


let j = 0
do {
    if(names[j].length < 4) {
        console.log(names[j])
    }
    j++
} while(j < names.length)