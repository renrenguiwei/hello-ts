/**
 * public、private、readonly
 * 1. public 正常无
 * 2. private 在类内部玩
 * 3. readonly 内、外都只能读取，不可修改
 */

export default class Invoice {
    // private client: string
    // readonly details: string
    // public amount: number

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
        return `${this.client} owes ￥${this.amount}k for ${this.details}`
    }

    a() {
        return this.client = '1'
    }
}