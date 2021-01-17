"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./classes/Invoice");
const Payment_1 = require("./classes/Payment");
let invOne;
let invTwo;
invOne = new Invoice_1.Invoice('Claus', 'working for the Chanjet', 25);
invTwo = new Payment_1.Payment('Summer', 'shopping in the Walmart', 100);
console.log(invOne.format());
console.log(invTwo.format());
console.log(invTwo.name.trim());
//# sourceMappingURL=indexClass.js.map