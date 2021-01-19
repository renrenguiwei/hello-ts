interface IsPerson {
    name: string,
    age: number,
    speak(text: string): string,
    spend(amount: number): number
}

const me: IsPerson = {
    name: 'Claus',
    age: 29,
    speak(text: string): string {
        return text
    },
    spend(amount: number): number {
        return amount
    }
}

const greetPerson = (person: IsPerson):void => {
    console.log( `my name is ${person.name}, ${person.age}-year-old, say today's weather is so ${person.speak('awesome')}, spend ${person.spend(30)}元 buy a fish` )
}

greetPerson(me)




import Invoice from "./classes/Invoice";

const invOne = new Invoice('Claus', 'working for the Chanjet', 25)
const invTwo = new Invoice('Summer', 'working for the 58', 16)

// console.log(invOne)
// console.log(invTwo)
//
// console.log(invOne.format())
// console.log(invTwo.format())


// 使用此类规定类型
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

// console.log(invoices)










