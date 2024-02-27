//function with Obj

interface Product {
    name: string,
    stock: number,
    price: number,
    photo: string,
    readonly id: string
}

type GetDataType = (product: Product) => void

const getData: GetDataType = (product) =>{
    console.log(product)
}

const productOne: Product = {
    name: "Macbook",
    stock: 46,
    price: 99999,
    photo: "samplephotourl",
    id: "asdflqjwreoj"
}

getData(productOne)