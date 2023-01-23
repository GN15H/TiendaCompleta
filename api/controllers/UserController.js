import UserModel from "../models/UserModel.js";

//Mostrar registros de usuarios

export const getAllUsers = async (req, res)=>{
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//mostrar un usuario
export const getUser = async(req,res)=>{
    try {
        const user = await UserModel.findAll({
            where:{ id:req.params.id}
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

//crear un usuario
 export const createUser = async (req, res) =>{
    try {
       await UserModel.create(req.body)
       res.json({
            "message":"!Registro creado correctamente¡"
       })
    } catch (error) {
        res.json( {message: error.message})
    }
 }