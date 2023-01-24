import ImageModel from "../models/ImageModel.js"

//mostrar todas las imagenes

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

//Mostrar un usuario
export const getImage = async(req,res)=>{
    try {
        const image = await ImageModel.findAll({
            where:{ id :req.paramas.id}
        })
        res.json(image[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}