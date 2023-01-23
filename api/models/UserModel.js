import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UserModel = db.define('usuarios', {
    username: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING}
})

export default UserModel;