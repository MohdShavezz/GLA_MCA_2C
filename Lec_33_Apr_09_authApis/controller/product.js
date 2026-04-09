import { Product } from "../models/Product.js"


export async function addProduct(req,res){
    try {
        const {name,price}=req.body
        const prod= await Product.insertOne({name,price})
        res.status(201).json(prod)
    } catch (error) {
        console.log('error in addProduct',error)
    }
}
export async function getProducts(req,res){
      try {
        const prods= await Product.find()
        res.status(200).json(prods)
    } catch (error) {
        console.log('error in getProducts',error)
    }
}
export async function getProductById(req,res){
    const {id}=req.params
     try {
        const prod= await Product.findById(id)
        res.status(200).json(prod)
    } catch (error) {
        console.log('error in getProductById',error)
    }
}
export async function deleteProduct(req,res){
    const {id}=req.params
    try {
        await Product.findByIdAndDelete(id)
        res.send('product deleted')
    } catch (error) {
        console.log('error in deleteProduct',error)
    }
}
export async function updateProduct(req,res){
    const {id}=req.params
     const {name,price}=req.body
    try {
        const prod=await Product.findByIdAndUpdate(id,{name,price},{new:true})
        res.status(200).json(prod)
    } catch (error) {
        console.log('error in deleteProduct',error)
    }
}

