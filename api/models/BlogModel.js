import db from '../database/db.js';

import { DataTypes } from "sequelize";

//conexión con la tabla de productos mediante sequelize
const ProductModel = db.define('productos', {
    nombreProducto: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.STRING},
    precio: { type: DataTypes.NUMBER},
    createdBy: { type: DataTypes.NUMBER},
    stock: { type: DataTypes.NUMBER},
    minStock: { type: DataTypes.NUMBER},
    maxStock: { type : DataTypes.NUMBER}
})

export default ProductModel;
