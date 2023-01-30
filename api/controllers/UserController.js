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
            where:{ username:req.body.username,
                    password:req.body.password}
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


//crear un usuario
 export const createUser = async (req, res) =>{
    try {
       await UserModel.create(req.body)
       res.json('Exito')
    } catch (error) {
        res.json( {message: error.message})
    }
 }
 
 //Update admin profile

 export const updateUser = async (req, res) =>{
    try{
        await UserModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json('Perfil actualizado correctamente')
    }catch(error){
        res.json({message: error.message})
    }
}
