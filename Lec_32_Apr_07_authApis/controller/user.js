import { User } from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export async function register(req, res) {
    try {
        const { name, email, password } = req.body

        //check if already exist
        const user = await User.findOne({ email })
        if (user) {
            return res.status(200).send('your are already registered.')
        }
        const hashedPass = await bcrypt.hash(password, 10)

        const u = await User.insertOne({ name, email, password: hashedPass })
        res.status(201).json({ user: u, message: 'registration sucesss' })

    } catch (error) {
        console.log('error in register', error)
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body

        //check user exist
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(200).send('your are not registered.')
        }
        //passwrod compare
        const isSame = await bcrypt.compare(password, user.password) //boolean
        if (!isSame) {
            return res.status(200).send('your cred are invalid.')
        }

        //craete jwt token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            user,
            token
        })

    } catch (error) {
        console.log('error in login', error)
    }
}
export async function getUserById(req, res) {
    try {
       const {id}=req.params
       const user=await User.findById(id)
       if(!user){
          return res.status(404).send('user not found')
       }
       res.status(200).json(user)

    } catch (error) {
        console.log('error in getUserById', error)
    }
}
export async function getUsers(req, res) {
    try {
       const users=await User.find()
       if(users.length==0){
          return res.status(404).send('no active user.s')
       }
       res.status(200).json(users)

    } catch (error) {
        console.log('error in getUsers', error)
    }
}