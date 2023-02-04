import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import productRoutes from './routes/routes.js' //importacion del modelo de rutas
import ProductModel from "./models/BlogModel.js"; //importacion del modelo de productos


const app = express()

app.use( cors()) //uso de cors para solucionar problemas con la conexion de la base de datos
app.use(express.json())
app.use('/productos', productRoutes)

try {
   await db.authenticate()
   console.log('Conexion exitosa a la DB');
} catch (error){
    console.log(`El error de conexion es: ${error}`);
}

app.listen(8000, ()=>{ //levantar servidor
    console.log('Server up running in localhost 8000');
})


const products = await ProductModel.findAll({ //arrglo del servidor que obtiene el id de todos los productos y su stock
    attributes: ["id", "stock"],
    order: [["id","ASC"]]
})

const productsMin = await ProductModel.findAll({  //arrego del servidor que obtiene el id, stock minimo y nombre del producto
    attributes : ["id", "minStock", "nombreProducto"],
    order: [["id","ASC"]]
})

let productsStock = {} //objeto que se usa para almacenar la informacion de products
let productsMinStock = {} //objeto que se usa para almacenar la informacion de productsmin
products.forEach(product =>{
    productsStock[product.dataValues.id] = product.dataValues.stock //se le agrega la informacioon a productsstock
})
productsMin.forEach(product =>{
    productsMinStock[product.dataValues.id] = [product.dataValues.minStock, product.dataValues.nombreProducto] //se le agrega la informacion productsmnsotck
})

export {productsStock, productsMinStock};

