import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UserModel = db.define('usuarios', {
    username: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    address: { type: DataTypes.STRING},
    isAdmin: { type: DataTypes.BOOLEAN}
})

export default UserModel;