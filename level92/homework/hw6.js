// 6)let a = 45;
// let b = 78;
// let c = 32;

// Math.max-ის გარეშე, მხოლოდ nested ternary-ის გამოყენებით იპოვე უდიდესი რიცხვი.


let a = 45
let b = 78
let c = 32

a > b && a > c ? console.log(a)
: b > a && b > c ? console.log(b)
: console.log(c)