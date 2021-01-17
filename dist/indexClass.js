class Invoice {
    format() {
        return `${this.client} owes ￥${this.amount}k for ${this.details}`;
    }
}
const invOne = new Invoice();
const invTwo = new Invoice();
console.log(invOne);
console.log(invTwo);
invOne.client = `2092's Me`;
invOne.details = `working for the Chanjet`;
invOne.amount = 30;
console.log(invOne.format());
console.log(invTwo.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
//# sourceMappingURL=indexClass.js.map