// 1)შექმენით სია სადაც იქნება სახელები , გამოიტანეთ მხოლოდ ის სახელები რომლის სიგრძე მეტია 4 ზე

let names = ["zaza", "saba", "giorgi","nika", "lasha","luka"]

names.forEach((item)=> {
    if(item.length > 4) {
        console.log(item)
    } else {
        console.log("Invalid name")
    }
})