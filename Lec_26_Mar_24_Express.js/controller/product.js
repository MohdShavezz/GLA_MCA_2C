


const products=[
    {id:1,name:'jug',price:10},
    {id:2,name:'pen',price:20},
    {id:3,name:'phone',price:30},
]

export function getProducts(req,res){
    res.send(products)
}
export function getProductById(req,res){
    const {id}=req.params
    const prod=products.find(ele=>ele.id==id)
    if(!prod){

        res.status(404).send('product not found')
        return
    }
    res.status(200).json(prod)
}
export function deleteProduct(req,res){
    const {id}=req.params
    const prods=products.filter(ele=>ele.id!=id)
    res.status(200).json(prods)
}
export function addProduct(req,res){
    const payload=req.body
    console.log(payload)
    const obj={
        id:products.length+1,
        ...payload
    }
    products.push(obj)
    res.status(200).json(products)
}

