// boolean types
let flag: boolean;
let yes = true;
let no = false;

// numbers types and bigInteger
let x: number;
let y = 0;
let z: number = 123.456;
// let big: bigint = 100n;

// carcteres types

let s: string;
let empty = "";
let abc = 'abc';


let myName: string = "Max Santos"
let massage: string = `My name is ${myName}, im software engennier`

console.log(massage);


// enum 

enum ContractStatus {
     Permanent,
     Temp,
     Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Apprentice;
console.log(employeeStatus);


// multType using (|)

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
// multiType = "twenty";   //* Invalid

// Array types or no type

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Arrye with of two types

let list3: (number | string)[] = [1, 2, 3, "four"];

// tuple types

let x1: [string, number];
x1 = ["hello", 10];

// enum types

enum Color {Red = 1, Green = 2, Blue = 4}