import express from 'express'
import dotenv from 'dotenv'
import productRoute from './routes/product.js'
import dbConn from './db/dbConn.js'

dotenv.config({})
dbConn()

const app = express()

app.use(express.json())


app.use('/api',productRoute) //http://localhost:3000/api/product

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server is runnin on',PORT)
})