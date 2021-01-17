// type StringOrNum = string | number
// type ObjWithName = { name: string, uid: StringOrNum }
//
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(uid + item)
// }
//
// const greet = (user: ObjWithName) => {
//     console.log(user.name + user.uid)
// }
//
// logDetails(1, '1')
// greet({name: 'claus', uid: '1'})

// let greet: (name: string, age: number) => string |number
//
// greet = (name: string, age: number ): string |number => {
//     console.log(`${name} say my age is ${age}`)
//     return 1
// }
//
// greet('claus', 12)
//
//
// let calc: (numOne: number, numTwo: number, action: string) => number
//
// calc = (numOne: number, numTwo: number, action: string): number => {
//     if (action === 'add') {
//         return numOne + numTwo
//     } else {
//         return numOne - numTwo
//     }
// }
//
// console.log(calc(1, 2, 'add'))
//
//
// type person = {
//     name: string,
//     age: number
// }
//
// let logDetails : (obj: person) => void
//
// logDetails = (obj: person): void => {
//     console.log(`${obj.name} ${obj.age}`)
// }

// 泛型 T 应用
// let saySomething = (obj: object) => {
// let saySomething = <T>(obj: T) => {
let saySomething = <T extends { love: string }>(obj: T) => {
    return {...obj}
}

let sayOne = saySomething({ love: 'you', eat: 'soul' })

interface Letter<T> {
    title: string;
    content: string;
    others: T
}

const girlFriendLetter: Letter<object> = {
    title: 'I love you',
    content: 'forever',
    others: {
        msg: 'wait for you night'
    }
}
const ex_girlFriendeLetter: Letter<string> = {
    title: 'I hate you',
    content: 'ever',
    others: 'kick you ass'
}

























