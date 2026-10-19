// 1) დაწერე კოდი სადაც გექნება მასივი Prices = [,20,100,2,500,132,315,15] და ასევე მასივი Items = ["phone","book","mask","glasses","sticker","bottle","coke"]
// შენი დავალებაა: 
// 1.1 დააწყვილო ეს ელემენტები ან მაგალითად ---> ნივთი: phone 
//                                              ფასი:  20

let prices = [,20,100,2,500,132,315,15]
let items = ["phone","book","mask","glasses","sticker","bottle","coke"]

items.forEach((item,index) => {
    console.log("ნივთი: " + item)
    console.log("ფასი: " + prices[index + 1])
})