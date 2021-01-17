import {HasFormatter} from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{
    constructor(
        private client: string, // 类型限定 简写
        readonly details: string,
        public amount: number
    ) {
        this.client = client
        this.details = details
        this.amount = amount
    }

    format() {
        return `${this.client} payment ￥${this.amount}元 for ${this.details}`
    }
}