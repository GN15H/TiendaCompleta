import db from '../database/db.js';

import { DataTypes } from "sequelize";

const ProductModel = db.define('productos', {
    nombreProducto: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.STRING},
    precio: { type: DataTypes.NUMBER},
    createdBy: { type: DataTypes.NUMBER}
})

export default ProductModel;
