"use strict";
let a = "not";
let no = 45;
let check = "Hello"; // ----> an other way of providing type to a variable
let surname; // ---> union datatype surname can now be a string as well as a number
surname = "yoo";
const func = (n, m) => {
    console.log(n, m);
    return n * m;
};
console.log(a);
console.log(no);
console.log(surname);
