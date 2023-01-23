import express from 'express'
import { getAllProducts, getProduct } from '../controllers/BlogController.js'
import { getAllUsers, getUser } from '../controllers/UserController.js'
const router = express.Router()

router.get('/', getAllProducts)
router.get('/users', getAllUsers)
router.get('/users/:id', getUser)
router.get('/:id', getProduct)



export default router