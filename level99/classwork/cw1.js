// 1)შექმენი სია სადაც მოათავსებ ადამიანის სახელებს,შენი დავალებაა რომ ამ სიას გადაუარო ფორ ლუპით და გამოიტანო მხოლოდ ის ელემენტები რომლის სიგრძე მეტია 5 ზე და იწყება ასო "g" ზე

let list = ["zaza", "saba", "giorgi", "luka"]

for(let i = 0; i < list.length; i++) {

    if(list[i].length > 5 && list[i].startsWith("g")) {
        console.log(list[i])
    }

}