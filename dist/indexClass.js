"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./classes/Invoice");
const Payment_1 = require("./classes/Payment");
const invOne = new Invoice_1.Invoice('Claus', 'working for the Chanjet', 25);
const invTwo = new Payment_1.Payment('Summer', 'shopping in the Walmart', 100);
console.log(invOne.amount);
console.log(invTwo.format());
//# sourceMappingURL=indexClass.js.map