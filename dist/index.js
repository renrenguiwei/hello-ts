let greet;
greet = (name, age) => {
    console.log(`${name} say my age is ${age}`);
    return 1;
};
greet('claus', 12);
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(1, 2, 'add'));
let logDetails;
logDetails = (obj) => {
    console.log(`${obj.name} ${obj.age}`);
};
//# sourceMappingURL=index.js.map