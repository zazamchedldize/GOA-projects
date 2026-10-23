// 5)let computer = {
//     brand: "Lenovo",
//     model: "Legion 5",
//     ram: 16,
//     storage: 512,
//     processor: "Intel i5",
//     graphicsCard: "RTX 3060",
//     price: 3200,
//     isGaming: true
// };


// მოთხოვნები:
// 1. გამოიტანე კომპიუტერის ბრენდი, მოდელი და ფასი.
// 2. ram შეცვალე 32-ით.
// 3. storage შეცვალე 1024-ით.
// 4. processor შეცვალე "Intel i7"-ით.
// 5. დაამატე screenSize მნიშვნელობით 15.6.
// 6. დაამატე hasWarranty მნიშვნელობით true.
// 7. წაშალე graphicsCard.
// 8. წაშალე isGaming.
// 9. price შეცვალე 3500-ით.
// 10. დაამატე operatingSystem მნიშვნელობით "Windows 11".
// 11. გამოიტანე ram, storage, processor და operatingSystem.
// 12. გამოიტანე საბოლოო ობიექტი.


let computer = {
    brand: "Lenovo",
    model: "Legion 5",
    ram: 16,
    storage: 512,
    processor: "Intel i5",
    graphicsCard: "RTX 3060",
    price: 3200,
    isGaming: true
}

console.log(computer.brand)
console.log(computer.model)
console.log(computer.price)

computer.ram = 32
computer.storage = 1024
computer.processor = "Intel i7"

computer.screenSize = 15.6
computer.hasWarranty = true

delete computer.graphicsCard
delete computer.isGaming

computer.price = 3500

computer.operatingSystem = "Windows 11"

console.log(computer.ram)
console.log(computer.storage)
console.log(computer.processor)
console.log(computer.operatingSystem)

console.log(computer)