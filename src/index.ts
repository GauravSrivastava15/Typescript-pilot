let a: string = "not"
let no: number = 45
let check = <string> "Hello"  // ----> an other way of providing type to a variable

let surname: string | number;  // ---> union datatype surname can now be a string as well as a number
surname =  "yoo"

const func  = (n: number, m: number) : number => {  // here we have declared that a number will be returned from this function now we cannot return string or void
    console.log(n,m)
    return n * m
}

console.log(a)
console.log(no)
console.log(surname)