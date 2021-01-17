"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} payment ￥${this.amount}元 for ${this.details}`;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map