"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: 'Claus',
    age: 29,
    speak(text) {
        return text;
    },
    spend(amount) {
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(`my name is ${person.name}, ${person.age}-year-old, say today's weather is so ${person.speak('awesome')}, spend ${person.spend(30)}元 buy a fish`);
};
greetPerson(me);
const Invoice_1 = __importDefault(require("./classes/Invoice"));
const invOne = new Invoice_1.default('Claus', 'working for the Chanjet', 25);
const invTwo = new Invoice_1.default('Summer', 'working for the 58', 16);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//# sourceMappingURL=indexClass.js.map