//use interface whenever you want to create class or object
// interface can be extended

interface Obj{
    height: number,
    weight: number,
    gender?: boolean,    // ? is used to make the property optional
}

type FuncType = (n: number, m: number) => void

interface newObj extends Obj{
scholar: boolean,
// func?: (n:number, m:number) => void
func: FuncType     // we have used types in interface here
}

const gg: newObj ={
    height: 123,
    weight:34,
    scholar: false,
    func: (n,m) =>{
        console.log(n*m)
    }
}

const npc: newObj = {
    height: 160,
    weight: 48,
    scholar: true,
    func: (n,m) =>{
        console.log(n*m)
    }
}

npc.func(5,30)

// type Obj = {
//     height: number,
//     weight: number,
//     gender?: boolean,    // ? is used to make the property optional
// }

const obj: Obj = {
    height: 125,
    weight: 40,
    gender: true
}

const obj2: Obj = {
    height: 145,
    weight: 50,
    gender:false
}

const obj3: Obj = {
    height: 135, 
    weight: 48
}