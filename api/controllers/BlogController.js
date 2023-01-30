import ProductModel from "../models/BlogModel.js";
import { productsStock, productsMinStock } from "../app.js";
import { sendMail } from "../email/SendEmail.js";

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

export const updateProduct = async (req, res) =>{
    try{
        await ProductModel.update(req.body, {
            where: { id: req.params.id}
        })
        if (req.body.stock <= productsMinStock[req.params.id][0]){
            sendMail(productsMinStock[req.params.id][1])
        }
        res.json('Registro actualizado correctamente')
    }catch(error){
        res.json({message: error.message})
    }
}

//crear un registro

export const bookProduct = async (req, res) => {
    try {
        if (req.query.f === 'unbook'){
            productsStock[req.params.id]++;
            console.log(productsStock);
            return res.json('Unbooked');
        } else if (req.query.f === 'book') {
            if (productsStock[req.params.id] == 0) return res.json('Stockout')
            productsStock[req.params.id]--;
            console.log(productsStock);
            return res.json('Booked');
        } 
        res.status(400).json('Bad request');
    } catch (error) {
        res.json({message: error.message})
    }
}