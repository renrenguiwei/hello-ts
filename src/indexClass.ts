class Invoice {
    client: string
    details: string
    amount: number

    constructor(client: string, details: string, amount: number) {
        this.client = client
        this.details = details
        this.amount = amount
    }

    format() {
        return `${this.client} owes ￥${this.amount}k for ${this.details}`
    }
}

const invOne = new Invoice('Claus', 'working for the Chanjet', 25)
const invTwo = new Invoice('Summer', 'working for the 58', 16)

console.log(invOne)
console.log(invTwo)

console.log(invOne.client)
invOne.client = `2092's Me`

console.log(invOne.format())
console.log(invTwo.format())


// 使用此类规定类型
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)










