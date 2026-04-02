import express from 'express'
import { addProduct, deleteProduct, getProductById, getProducts,updateProduct } from '../controller/product.js'

const router=express.Router()


router.route('/products').get(getProducts)   //http://localhost:3000/api/products GET
router.route('/product/:id').get(getProductById).delete(deleteProduct).put(updateProduct)   //http://localhost:3000/api/product/2 GET
router.route('/product').post(addProduct)   //http://localhost:3000/api/product/2 POST

export default router