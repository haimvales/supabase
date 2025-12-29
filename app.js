import express from "express";


import productRoutes from "./ROUTER/prodactsROUTER.js";

const app = express();
const port = 3008;
app.use(express.json());




// users product
app.use("/product", productRoutes);








app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})