// 4)let movie = {
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     year: 2014,
//     rating: 8.7,
//     genre: "Sci-Fi",
//     duration: 169,
//     language: "English"
// };


// შეასრულე შემდეგი მოქმედებები:
// 1. გამოიტანე ფილმის სათაური, რეჟისორი და გამოსვლის წელი.
// 2. rating შეცვალე 9.0-ით.
// 3. duration შეცვალე 170-ით.
// 4. genre შეცვალე "Science Fiction"-ით.
// 5. დაამატე country მნიშვნელობით "USA".
// 6. დაამატე availableOnPlatform მნიშვნელობით true.
// 7. წაშალე language.
// 8. წაშალე year.
// 9. დაამატე releaseYear მნიშვნელობით 2014.
// 10. გამოიტანე ყველა დარჩენილი და დამატებული თვისება.

let movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    duration: 169,
    language: "English"
}

console.log(movie.title)
console.log(movie.director)
console.log(movie.year)

movie.rating = 9.0
movie.duration = 170
movie.genre = "Science Fiction"

movie.country = "USA"
movie.availableOnPlatform = true

delete movie.language
delete movie.year

movie.releaseYear = 2014

console.log(movie)