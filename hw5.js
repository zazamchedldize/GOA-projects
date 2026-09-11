// 5)შექმენი ფუნქცია:

// finalList(numbers)

// მოცემულია:

// [15, 25, 35, 45, 55, 65]

// ფუნქციამ უნდა:

// შეამოწმოს Array.isArray()-ით, ნამდვილად სია გადაეცა თუ არა;
// თუ სია არ არის, დააბრუნოს "Not an array";
// თუ სიაა:
// shift()-ით ამოიღოს პირველი ელემენტი;
// unshift()-ით დასაწყისში დაამატოს 100;
// pop()-ით ამოიღოს ბოლო;
// push()-ით ბოლოში დაამატოს 200;
// splice()-ით შუაში დაამატოს 300;
// slice()-ით შექმნას საბოლოო სიის ასლი;
// დააბრუნოს ეს ასლი.

function finalList(numbers) {
    let list = [15, 25, 35, 45, 55, 65]
    if (Array.isArray(list) === true) {
        list.shift()
        list.unshift(100)
        list.pop()
        list.push(200)
        list.splice(2, 0, 300)
        let newList = list.slice(0, 7)
        return newList
    } else {
        return "Not an array"
    }
}