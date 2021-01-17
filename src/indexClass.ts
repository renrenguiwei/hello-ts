import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";

const invOne = new Invoice('Claus', 'working for the Chanjet', 25)
const invTwo = new Payment('Summer', 'shopping in the Walmart', 100)

console.log(invOne.amount)
console.log(invTwo.format())









