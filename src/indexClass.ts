import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormatter";

let invOne: HasFormatter
let invTwo: HasFormatter

invOne = new Invoice('Claus', 'working for the Chanjet', 25)
invTwo = new Payment('Summer', 'shopping in the Walmart', 100)

console.log(invOne.format())
console.log(invTwo.format())

console.log(invTwo.name!.trim()) // 非空断言，欺骗编辑器为非空









