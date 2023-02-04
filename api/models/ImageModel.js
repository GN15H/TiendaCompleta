import db from '../database/db.js';

import { DataTypes } from 'sequelize';

//conexión con la tabla de imagenes mediante sequelize
const ImageModel = db.define('imagenes', {    
    imagen1: { type: DataTypes.TEXT('long')},
    imagen2: { type: DataTypes.TEXT('long')},
    imagen3: { type: DataTypes.TEXT('long')},
    producto: { type: DataTypes.NUMBER}

})

export default ImageModel;