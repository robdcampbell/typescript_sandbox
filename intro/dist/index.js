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
// let id: number = 9;
// let company: string = "Omnicorp";
// let isPublihed: boolean = true;
// let x: any = "Hello";
// x = false;
// let ids: number[] = [1, 2, 3, 4, 5]; // notation to signify an array of numbers
// // ids.push('Hello') // Would throw an error.
// let arr: any[] = [1, "two", true];
// //////// //////// //////// ////////
// // Tuple
// let person: [number, string, boolean] = [1, "Rob", true]; // datatype must match index position
// //////// //////// //////// ////////
// // Tuple Array
// let employee: [number, string][];
// employee = [
//   [1, "Rob"],
//   [2, "Burt"],
//   [3, "Gordie"],
// ];
// // Unions - when you need a variable to hold more than one dataType
// let ex3: string | number = 22;
// // enum - define a set up named constants (numeric or string)
// enum Direction1 {
//   Up = 1, //      default value 0, but reset to 1
//   Down, //    default value 1 // now 2
//   Left, //    default value 2 // now 3
//   Right, //   default value 3 // now 4
// }
// console.log(Direction1.Up, Direction1.Right); // should log 0, 3
// enum Direction2 {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }
// console.log(Direction2.Left); // Retuns "Left"
// // Objects - can signify datatypes of key/value object properties
// type User = { id: number; name: string };
// const user: User = {
//   id: 1,
//   name: "John",
// };
// // Type Assertion - when you want to treat a specific entity as a different type
// let cid: any = 1;
// let customerId = <number>cid;
// // customerId = true; // Will throw an error, because customerId needs to be a number;
// let customerId2 = cid as number;
// //////// //////// //////// ////////
// // FUNCTIONS
// // set arg DataTypes, then return DataType
// function addNum(x: number, y: number): number {
//   return x + y;
// }
// console.log(addNum(5, 10));
// ******************** //
// OCTOBER
let id = 5;
// id = "5";
console.log(id);
