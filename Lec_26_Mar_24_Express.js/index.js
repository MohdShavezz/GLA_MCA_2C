import express from 'express'
import dotenv from 'dotenv'
import productRoute from './routes/product.js'
dotenv.config({})

const app = express()

// app.get('/',(req,res)=>{
//     res.send('hello defalut route')
// })
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs');

let list=['apple','banana','kiwi']
app.get('/ssr', (req, res) => {
    res.render('index',{data:list});
})

app.use('/api',productRoute) //http://localhost:3000/api/product

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server is runnin on',PORT)
})