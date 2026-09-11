// 1)შექმენი ფუნქცია editProducts(products), რომელსაც გადაეცემა პროდუქტების სია.

// მაგალითად:

// ["Laptop", "Mouse", "Keyboard", "Monitor"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Phone"
// ბოლოში დაამატოს "Headphones"
// ამოიღოს ბოლო ელემენტი
// "Mouse" ჩაანაცვლოს "Webcam"-ით
// დააბრუნოს საბოლოო სია

function editProducts(products) {
    let list = ["Laptop", "Mouse", "Keyboard", "Monitor"]
    list.unshift("Phone")
    list.push("Headphones")
    list.pop()
    list[1] = "Webcam"
    return list
}