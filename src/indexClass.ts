import Invoice from "./classes/Invoice";

const invOne = new Invoice('Claus', 'working for the Chanjet', 25)
const invTwo = new Invoice('Summer', 'working for the 58', 16)

console.log(invOne)
console.log(invTwo)

console.log(invOne.format())
console.log(invTwo.format())


// 使用此类规定类型
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)










