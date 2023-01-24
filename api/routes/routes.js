import express from 'express'
import { getAllProducts, getProduct } from '../controllers/BlogController.js'
import { getAllImages, getImage } from '../controllers/ImageController.js'
import { getAllUsers, getUser } from '../controllers/UserController.js'
const router = express.Router()

router.get('/', getAllProducts)
//router.get('/users', getAllUsers)
router.get('/images', getAllImages)
router.get('/images/:id', getImage)
//router.get('/users/:id', getUser)
router.get('/:id', getProduct)



export default router