import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next) => {
  
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).send('invalid token')
    }
    const token=authHeader.split(' ')[1] // "Bearer token" ['Bearer','token']
    console.log(token)

    const decoded=jwt.verify(token,process.env.JWT_SECRET)

    req.userId=decoded._id

    next()
}

export default authMiddleware
