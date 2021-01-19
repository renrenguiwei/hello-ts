"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = __importDefault(require("./classes/Invoice"));
const invOne = new Invoice_1.default('Claus', 'working for the Chanjet', 25);
const invTwo = new Invoice_1.default('Summer', 'working for the 58', 16);
console.log(invOne);
console.log(invTwo);
console.log(invOne.format());
console.log(invTwo.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
//# sourceMappingURL=indexClass.js.map