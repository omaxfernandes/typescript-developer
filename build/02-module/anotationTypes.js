"use strict";
// boolean types
let flag;
let yes = true;
let no = false;
// numbers types and bigInteger
let x;
let y = 0;
let z = 123.456;
// let big: bigint = 100n;
// carcteres types
let s;
let empty = "";
let abc = 'abc';
let myName = "Max Santos";
let massage = `My name is ${myName}, im software engennier`;
console.log(massage);
// enum 
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Apprentice;
console.log(employeeStatus);
// multType using (|)
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //* Invalid
// Array types or no type
let list = [1, 2, 3];
let list2 = [1, 2, 3];
// Arrye with of two types
let list3 = [1, 2, 3, "four"];
// tuple types
let x1;
x1 = ["hello", 10];
// enum types
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
