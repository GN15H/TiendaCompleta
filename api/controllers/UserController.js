import UserModel from "../models/UserModel.js";
import { encrypt } from "../encrypt.js";


//Mostrar registros de usuarios

//Obtiene todos los registros de usuarios de la base de datos
export const getAllUsers = async (req, res)=>{
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Obtiene un soo registro de usuario de la base de datos mediante el id
export const getUser = async(req,res)=>{
    try {
        const user = await UserModel.findAll({
            where:{ username:req.body.username,
                    password:encrypt(req.body.password)}
        })
        if (user.length !== 1){
            return res.json('Usuario no valido')
        }else{
            return res.json(user[0])
        }    
    } catch (error) {
        res.json( {message: error.message})
    }
}


//Crea un registro en la tabla de usuarios
 export const createUser = async (req, res) =>{
    try {
       await UserModel.create({...req.body, password: encrypt(req.body.password)})
       res.json('Exito')
    } catch (error) {
        res.json( {message: error.message})
    }
 }
 
 //Permite modificar el registro del usuario administrador
 export const updateUser = async (req, res) =>{
    try{
        await UserModel.update({...req.body,password : encrypt(req.body.password)}, {
            where: { id: req.params.id}
        })
        res.json('Perfil actualizado correctamente')
    }catch(error){
        res.json({message: error.message})
    }
}

console.log(encrypt('123'));
