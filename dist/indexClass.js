class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ￥${this.amount}k for ${this.details}`;
    }
    a() {
        return this.client = '1';
    }
}
const invOne = new Invoice('Claus', 'working for the Chanjet', 25);
const invTwo = new Invoice('Summer', 'working for the 58', 16);
console.log(invOne);
console.log(invTwo);
console.log(invOne.format());
console.log(invTwo.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
//# sourceMappingURL=indexClass.js.map