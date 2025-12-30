import express from "express";
import { validateUser } from "../MIDDLEWARE/prodactsMIDDLEWARE.js";
import { getAllProducts } from "../DAL/prodactsDAL.js";
import { getsproducts } from "../CTRL/prodactsCTRL.js";


// import { createUser } from "../ctrls/usersC.js";




const router = express.Router();


router.post("/login",validateUser);
router.get("/products",validateUser,getsproducts,getAllProducts);





export default router;