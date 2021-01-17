"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Invoice;
//# sourceMappingURL=Invoice.js.map