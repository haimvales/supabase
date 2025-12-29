import express from "express";
import { validateUser } from "../MIDDLEWARE/prodactsMIDDLEWARE.js";
import { getAllProducts } from "../DAL/prodactsDAL.js";


// import { createUser } from "../ctrls/usersC.js";




const router = express.Router();


router.post("/login",validateUser);
router.post("/products",validateUser,getAllProducts);





export default router;