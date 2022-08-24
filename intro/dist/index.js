"use strict";
// NOTES:  man pages - npx tsc
// common commands: tsc -v
// SAVE LOCALLY TO PROJ: npm install typescript --save-dev
// SETUP:
//  tsc --init (sets up ts_config file)
//  "module": "ES6"
//  "rootDir": "./src" /* Specify the root folder within your source files. */,
//  "outDir": "./dist" /* Specify an output folder for all emitted files. */,
// COMPILE: tsc fileName or tsc --watch fileName
//////// //////// //////// ////////
// BASIC TYPES
let id = 9;
let company = "Omnicorp";
let isPublihed = true;
let x = "Hello";
x = false;
let ids = [1, 2, 3, 4, 5]; // notation to signify an array of numbers
// ids.push('Hello') // Would throw an error.
let arr = [1, "two", true];
//////// //////// //////// ////////
// Tuple
let person = [1, "Rob", true]; // datatype must match index position
//////// //////// //////// ////////
// Tuple Array
let employee;
employee = [
    [1, "Rob"],
    [2, "Burt"],
    [3, "Gordie"],
];
// Unions - when you need a variable to hold more than one dataType
let ex3 = 22;
// enum - define a set up named constants (numeric or string)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up, Direction1.Right); // should log 0, 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); // Retuns "Left"
const user = {
    id: 1,
    name: "John",
};
// Type Assertion - when you want to treat a specific entity as a different type
let cid = 1;
let customerId = cid;
// customerId = true; // Will throw an error, because customerId needs to be a number;
let customerId2 = cid;
//////// //////// //////// ////////
// FUNCTIONS
// set arg DataTypes, then return DataType
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 10));
