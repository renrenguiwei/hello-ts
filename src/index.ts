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

let greet: (name: string, age: number) => string |number

greet = (name: string, age: number ): string |number => {
    console.log(`${name} say my age is ${age}`)
    return 1
}

greet('claus', 12)


let calc: (numOne: number, numTwo: number, action: string) => number

calc = (numOne: number, numTwo: number, action: string): number => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

console.log(calc(1, 2, 'add'))


type person = {
    name: string,
    age: number
}

let logDetails : (obj: person) => void

logDetails = (obj: person): void => {
    console.log(`${obj.name} ${obj.age}`)
}


























