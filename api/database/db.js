import {Sequelize} from 'sequelize';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from '../env.js';

const APP_DB_NAME = DB_NAME /*|| 'tienda'*/
const APP_DB_USER = DB_USER /*|| 'root'*/
const APP_DB_PASSWORD = DB_PASSWORD /*|| '123456789'*/
const APP_DB_HOST = DB_HOST /*|| 'localhost'*/

const db = new Sequelize(APP_DB_NAME, APP_DB_USER, APP_DB_PASSWORD, {
    host: APP_DB_HOST,
    dialect: 'mysql'
})

export default db;
