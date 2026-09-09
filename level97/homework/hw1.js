// 1)let songs = ["Song A", "Song B", "Song C"];
// დაამატე "Song D" და "Song E" მასივის ბოლოში push()-ით.
// წაშალე ბოლო სიმღერა pop()-ით.
// კიდევ ერთხელ დაამატე "Song F".
// დაბეჭდე საბოლოო მასივი და წაშლილი ელემენტი.


let songs = ["Song A", "Song B", "Song C"]

songs.push("Song D", "Song E")
let removedSong = songs.pop()
songs.push("Song F")

console.log(songs)
console.log(removedSong)