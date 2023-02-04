import {Sequelize} from 'sequelize';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from '../env.js';

const APP_DB_NAME = DB_NAME /*|| 'tienda'*/ //nombre de la base de datos 
const APP_DB_USER = DB_USER /*|| 'root'*/ //nombre del usuario
const APP_DB_PASSWORD = DB_PASSWORD /*|| '123456789'*/ //contraseña de la base de datos
const APP_DB_HOST = DB_HOST /*|| 'localhost'*/ //nombre del host

const db = new Sequelize(APP_DB_NAME, APP_DB_USER, APP_DB_PASSWORD, {
    host: APP_DB_HOST,
    dialect: 'mysql'
})
//conexión a la base de datos mediante sequelize

export default db;
