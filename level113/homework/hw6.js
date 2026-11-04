// 6)let movies = [
//     { title: "Avatar", rating: 8.5, year: 2009, watched: true },
//     { title: "Titanic", rating: 7.9, year: 1997, watched: true },
//     { title: "Joker", rating: 8.4, year: 2019, watched: false },
//     { title: "Inception", rating: 9.0, year: 2010, watched: true },
//     { title: "Venom", rating: 6.5, year: 2021, watched: false },
//     { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
// ];


// მოთხოვნები:
// 1. filter()-ით მიიღე მხოლოდ ის ფილმები, რომელთა რეიტინგი 8-ზე მეტია.
// 2. forEach()-ით გამოიტანე ყველა ფილმის სათაური და გამოშვების წელი.
// 3. map()-ით შექმენი ახალი სია, სადაც თითოეული ფილმი წარმოდგენილი იქნება შემდეგი ფორმით: "Avatar - 8.5".
// 4. findIndex()-ით იპოვე "Interstellar"-ის ინდექსი.
// 5. some()-ით შეამოწმე, არის თუ არა ისეთი ფილმი, რომელიც ჯერ არ უნახავთ.
// 6. every()-ით შეამოწმე, ყველა ფილმის რეიტინგი 6-ზე მეტია თუ არა.

let movies = [
    { title: "Avatar", rating: 8.5, year: 2009, watched: true },
    { title: "Titanic", rating: 7.9, year: 1997, watched: true },
    { title: "Joker", rating: 8.4, year: 2019, watched: false },
    { title: "Inception", rating: 9.0, year: 2010, watched: true },
    { title: "Venom", rating: 6.5, year: 2021, watched: false },
    { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
]

let newList = movies.filter(item => {
    return item.rating > 8
})

movies.forEach(item => {
    console.log(item.title, item.year)
})

let newList2 = movies.map(item => {
    return `${item.title} - ${item.rating}`
})

let index = movies.findIndex(item => {
    return item.title === "Interstellar"
})

let result = movies.some(item => {
    return item.watched === false
})

let result2 = movies.every(item => {
    return item.rating > 6
})

console.log(newList)
console.log(newList2)
console.log(index)
console.log(result)
console.log(result2)