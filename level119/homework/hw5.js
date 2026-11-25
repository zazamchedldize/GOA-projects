// 5)let activeUsers = ["Nika", "Ana", "Gio"];
// let inactiveUsers = ["Luka", "Mariam"];
// let newUsers = ["Saba", "Elene"];


// 1. შექმენი ახალი მასივი allUsers, რომელშიც ყველა მომხმარებელი იქნება.
// 2. შექმენი onlineUsers მასივი, რომელშიც იქნება მხოლოდ activeUsers და newUsers.
// 3. შექმენი finalUsers მასივი, რომელშიც ჯერ იქნება allUsers-ის პირველი ორი მომხმარებელი, შემდეგ inactiveUsers, ბოლოს კი allUsers-ის ბოლო ორი მომხმარებელი.
// 4. ყველა ახალი მასივი Spread Operator-ის გამოყენებით შექმენი.


let activeUsers = ["Nika", "Ana", "Gio"]
let inactiveUsers = ["Luka", "Mariam"]
let newUsers = ["Saba", "Elene"]

let allUsers = [...activeUsers, ...inactiveUsers, ...newUsers]

let onlineUsers = [...activeUsers, ...newUsers]

let finalUsers = [...allUsers.slice(0, 2),...inactiveUsers,...allUsers.slice(-2)]

console.log(allUsers)
console.log(onlineUsers)
console.log(finalUsers)