import ProductModel from "../models/BlogModel.js";

//Mostrar todos los registros

export const getAllProducts = async (req, res) =>{
    try {
        const blogs = await ProductModel.findAll()
        res.json(blogs)
    } catch (error){
        res.json( {message: error.message})
    }
}

//mostrar un registro
export const getProduct = async (req,res)=>{
    try {
        const blog = await ProductModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(blog[0])
    } catch (error){
        res.json( {message: error.message})
    }

}

//crear un registro
