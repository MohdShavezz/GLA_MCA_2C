import express from 'express'
import { forgotPassword, getUserById, getUsers, login, register, resetPassword } from '../controller/user.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router=express.Router()


router.route('/register').post(register)   //http://localhost:3000/api/user/register POST
router.route('/login').post(login)   //http://localhost:3000/api/user/login POST
router.route('/forgot-password').post(forgotPassword)   //http://localhost:3000/api/user/forgot-password POST {email}
router.route('/reset-password').post(resetPassword)   //http://localhost:3000/api/user/reset-password POST {newpassword,token}
router.route('/users').get(authMiddleware,getUsers)   //http://localhost:3000/api/user/users GET
router.route('/:id').get(getUserById)   //http://localhost:3000/api/user {id} GET

export default router