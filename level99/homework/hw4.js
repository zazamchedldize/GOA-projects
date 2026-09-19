// 4)let names = [
//   "  goga ",
//   "NIKA",
//   "  ana  ",
//   "Giorgi",
//   "  mariam"
// ];

// შექმენი პროგრამა, რომელიც:

// ყველა სახელს მოაშორებს ზედმეტ სივრცეებს.

// თითოეული სახელის პირველ ასოს გადაიყვანს დიდ ასოში, ხოლო დანარჩენ ასოებს — პატარა ასოებში.

// განაახლებს თავდაპირველ მასივს.

// დაითვლის, რამდენი სახელი შეიცავს ასო "a"-ს.

// უკუღმა ციკლით დაბეჭდავს სახელებს.

// თუ სახელი "goga"-ს უდრის, გამოიტანს "Hello Goga!" შეტყობინებას.


let names = [
  "  goga ",
  "NIKA",
  "  ana  ",
  "Giorgi",
  "  mariam"
];

let a = 0

for(let i = 0; i < names.length; i++) {
    names[i] = names[i].trim()
    names[i] = names[i].toLowerCase()
    names[i] = names[i][0].toUpperCase() + names[i].slice(1)

    if(names[i].includes("a")){
        a += 1
    }
}

for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i])
    if(names[i] === "goga") {
        console.log("Hello Goga")
    }
}