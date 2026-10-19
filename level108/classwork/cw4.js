// 4) თქვენი დავალებაა:
// 4.1 სერვერთან დასაკავშირებლად მომხმარებლის უსაფრთხოების ტოკენების სია (tokens) მკაცრ სტანდარტს უნდა აკმაყოფილებდეს. გამოიყენე every იმის შესამოწმებლად, არის თუ არა ყველა ტოკენი ისეთი, რომ:
//     1.იწყება პრეფიქსით "SEC-"
//     2.მისი სიგრძე მეტია ან ტოლია 8 სიმბოლოზე.
// ოღონდ გაქვს 3 სერვერი და სამივე token შეამოწმე:
// მასივები: const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
//          const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
//          const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];


const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"]
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"]
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"]

let check1 = tokens_serv1.every(item => item.startsWith("SEC-") && item.length >= 8)
let check2 = tokens_serv2.every(item => item.startsWith("SEC-") && item.length >= 8)
let check3 = tokens_serv3.every(item => item.startsWith("SEC-") && item.length >= 8)

console.log(check1)
console.log(check2)
console.log(check3)