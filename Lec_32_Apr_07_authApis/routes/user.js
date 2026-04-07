import express from 'express'
import { getUserById, getUsers, login, register } from '../controller/user.js'

const router=express.Router()


router.route('/register').post(register)   //http://localhost:3000/api/user/register POST
router.route('/login').post(login)   //http://localhost:3000/api/user/login POST
router.route('/users').get(getUsers)   //http://localhost:3000/api/user/users GET
router.route('/:id').get(getUserById)   //http://localhost:3000/api/user {id} GET

export default router