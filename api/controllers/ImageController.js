import ImageModel from "../models/ImageModel.js"
import db from "../database/db.js"

//Obtiene todas las primeras imagenes de cada registro
export const getAllImages = async (req,res)=>{
    try {
        let images = await ImageModel.findAll({
            order:[
                ['producto', 'ASC']
            ]
        })
        images = images.map((image)=> image.imagen1)

        res.json(images)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Obtiene la primera imagen de un registro por el id
export const getImage = async(req,res)=>{
    //console.log(req.paramas.id);
    try {
        const image = await ImageModel.findAll({
            where:{ id :req.params.id}
        })
        res.json(image[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}