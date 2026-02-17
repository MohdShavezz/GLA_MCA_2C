import http from 'http'


const users=[
    {id:1,name:'tom',age:22},
    {id:2,name:'siya',age:21},
    {id:3,name:'manish',age:20}
]
const app=http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    if(req.method==='GET'&& req.url==='/'){
       res.end('this is default route') 
    }else if(req.method==='GET'&& req.url==='/users'){
        res.end(JSON.stringify(users))
    }else if(req.method==='POST'&& req.url==='/users'){
        let body=''
        req.on('data',(chunk)=>{
             body+=chunk.toString()
        })
        req.on('end',()=>{
            let user=JSON.parse(body)
            let obj={
                id:users.length>0?users.length+1:1,
                ...user
            }
            users.push(obj)
            res.end(JSON.stringify(users))
        })
    }else if(req.method==='DELETE'){ //localhost:5000/users/1
        const userId=+req.url.split('/')[2]
        return 
    }
})



const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is running on: ',port)
})