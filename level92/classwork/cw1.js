// 1)შექმენით ცვლადი სახელად name სადაც არაფერს შეინახავთ

// ქვემოთ შექმენით ცვლადი nameForGreeting და მასში შეინახეთ ---> name ცვლადი(თუ name ცვლადში ინახება რაიმე მნშვნელობა ) ან "guest"

// შემდეგ დააკონსოლეთ შემდეგი წინადადება --> hello {nameForGreeting} , how you doing?

// ახსენით მოკლედ კომენტარის სახით თუ რა მოხდა


let name = ''

let nameForGreeting = name || 'guest'

console.log(`hello ${nameForGreeting} how you doing?` )

// რადგან name ცვლადი ცარიელი იყო, console ში გამოვიდა 'guest'