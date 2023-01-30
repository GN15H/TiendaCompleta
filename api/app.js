import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import productRoutes from './routes/routes.js'
import ProductModel from "./models/BlogModel.js";

const app = express()

app.use( cors())
app.use(express.json())
app.use('/productos', productRoutes)

try {
   await db.authenticate()
   console.log('Conexion exitosa a la DB');
} catch (error){
    console.log(`El error de conexion es: ${error}`);
}

app.listen(8000, ()=>{
    console.log('Server up running in localhost 8000');
})


const products = await ProductModel.findAll({
    attributes: ["id", "stock"],
    order: [["id","ASC"]]
})

const productsMin = await ProductModel.findAll({
    attributes : ["id", "minStock", "nombreProducto"],
    order: [["id","ASC"]]
})

let productsStock = {}
let productsMinStock = {}
products.forEach(product =>{
    productsStock[product.dataValues.id] = product.dataValues.stock
})
productsMin.forEach(product =>{
    productsMinStock[product.dataValues.id] = [product.dataValues.minStock, product.dataValues.nombreProducto]
})

export {productsStock, productsMinStock};

