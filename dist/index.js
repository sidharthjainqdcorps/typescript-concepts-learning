"use strict";
console.log("hello-world!");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123;
let numbers = [1, 2, 3, '4'];
let num = [1, 2, 4];
let tup1 = [1, 'sid'];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: 'sid',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.0;
    }
    else {
        return parseInt(weight) * 2.5;
    }
}
kgToLbs(10);
kgToLbs('10kgs');
//# sourceMappingURL=index.js.map