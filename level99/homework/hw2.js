// 2)let messages = [
//   "  Hello Goga  ",
//   "JAVASCRIPT is fun",
//   "  I LOVE CODING ",
//   "React is awesome",
//   "  Learn JavaScript  "
// ];

// შექმენი პროგრამა, რომელიც:

// თითოეულ შეტყობინებას მოაშორებს ზედმეტ სივრცეებს გვერდებიდან. 

// ყველა შეტყობინებას გადაიყვანს პატარა ასოებში.

// შეამოწმებს, შეიცავს თუ არა შეტყობინება სიტყვას "javascript" --> includes() გამოიყენეთ.

// თუ შეიცავს, დაბეჭდავს "JavaScript message found".

// დაითვლის, რამდენი შეტყობინება შეიცავს ამ სიტყვას დაგჭრდებათ count = 0 ცვლადი .

// უკუღმა ციკლით დაბეჭდავს ყველა შეტყობინებას, რომელიც 15 სიმბოლოზე გრძელია.


let messages = [
  "  Hello Goga  ",
  "JAVASCRIPT is fun",
  "  I LOVE CODING ",
  "React is awesome",
  "  Learn JavaScript  "
];
let count = 0

for(let i = 0; i < messages.length; i++) {
    messages[i] = messages[i].trim() 
    messages[i] = messages[i].toLowerCase()

    if(messages[i].includes("javascript")) {
        console.log("JavaScript message found")
        count += 1
    }

}

for(let i = messages.length - 1; i >= 0; i--) {
    if(messages[i].length > 15) {
        console.log(messages[i])
    } else {
        console.log("Invalid")
    }
}