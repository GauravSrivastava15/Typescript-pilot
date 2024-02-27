"use strict";
//use interface whenever you want to create class or object
// interface can be extended
const gg = {
    height: 123,
    weight: 34,
    scholar: false,
    func: (n, m) => {
        console.log(n * m);
    }
};
const npc = {
    height: 160,
    weight: 48,
    scholar: true,
    func: (n, m) => {
        console.log(n * m);
    }
};
npc.func(5, 30);
// type Obj = {
//     height: number,
//     weight: number,
//     gender?: boolean,    // ? is used to make the property optional
// }
const obj = {
    height: 125,
    weight: 40,
    gender: true
};
const obj2 = {
    height: 145,
    weight: 50,
    gender: false
};
const obj3 = {
    height: 135,
    weight: 48
};
