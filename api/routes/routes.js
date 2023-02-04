import express from 'express'
import { bookProduct, getAllProducts, getProduct, updateProduct } from '../controllers/BlogController.js'
import handler from '../controllers/CheckoutController.js'
import { getAllImages, getImage } from '../controllers/ImageController.js'
import { pay } from '../controllers/Payment.js'
import { createUser, getAllUsers, getUser, updateUser } from '../controllers/UserController.js'
const router = express.Router()

//rutas que generan diferentes peticiones
router.get('/', getAllProducts)
router.get('/users', getAllUsers)
router.get('/images', getAllImages)
router.get('/images/:id', getImage)
router.get('/book/:id', bookProduct)
router.post('/checkout', handler)
router.post('/payment', pay)
router.post('/users', getUser)
router.post('/reg',createUser)
router.put('/edit/:id', updateUser)
router.put('/:id', updateProduct)
router.get('/:id', getProduct)


export default router