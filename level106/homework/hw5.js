// 5) მოცემულია მასივი list = [0, "გამარჯობა", "", null, undefined, "JS", false]. გამოიყენე filter(), რომ ამოიღო ყველა "falsy" (ცარიელი/არავალიდური) მნიშვნელობა.


let list = [0, "გამარჯობა", "", null, undefined, "JS", false]

let newList = list.filter(function(check) {
    return check
})

console.log(newList)
