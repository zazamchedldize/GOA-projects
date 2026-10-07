// 7)let scores = [95, 67, 42, 81, 55, 30];

// .forEach()-ით თითოეულ ქულაზე დაბეჭდე:

// 95 - Excellent
// 67 - Good
// 42 - Failed

// წესი შენ თვითონ განსაზღვრე, მაგალითად:

// 80+ → Excellent
// 60–79 → Good
// 50–59 → Average
// 50-ზე ნაკლები → Failed


let scores = [95, 67, 42, 81, 55, 30]

scores.forEach((item) => {
    if(item >= 80) {
        console.log(item + "-Ecxellent")
    } else if (item >= 60 && item <= 79) {
        console.log(item + "-Good")
    } else if (item >= 50 && item <= 59) {
        console.log(item + "-Average")
    }else if(item < 50) {
        console.log(item + "-Failed")
    }
})

