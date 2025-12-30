import { getAllProducts } from "../DAL/prodactsDAL.js";

export async function getsproducts (req,res) {
    const products = await getAllProducts();
    try{
        return res.status(200).json({ msg: products })
    } catch(err) {
        console.error(err)
    }
}