// 11)მოცემულია:

// let data1 = [10, 20, 30];
// let data2 = "Hello";
// let data3 = 100;
// let data4 = ["A", "B"];

// Array.isArray()-ის გამოყენებით შეამოწმე თითოეული ცვლადი არის თუ არა მასივი.

// დაბეჭდე შესაბამისი პასუხები:

// data1 is array
// data2 is not array
// ...

let data1 = [10, 20, 30]
let data2 = "Hello"
let data3 = 100
let data4 = ["A", "B"]


switch (Array.isArray(data1)) {
    case true:
        console.log("data1 is array")
        break
    case false:
        console.log("data1 is not array")
        break
}

switch (Array.isArray(data2)) {
    case true:
        console.log("data2 is array")
        break
    case false:
        console.log("data2 is not array")
        break
}

switch (Array.isArray(data3)) {
    case true:
        console.log("data3 is array")
        break
    case false:
        console.log("data3 is not array")
        break
}

switch (Array.isArray(data4)) {
    case true:
        console.log("data4 is array")
        break
    case false:
        console.log("data4 is not array")
        break
}