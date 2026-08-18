const express= require("express");
const cors= require("cors");
require("dotenv").config();

const connectDB =require("./config/db");
const  userRoutes = require("./routes/userRoutes");
const productRoutes =require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app= express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/categories",categoryRoutes);

app.get("/",(req,res)=>{
    res.send("Vone e-commerce Backend is connected");
});
connectDB();

app.listen(5001,()=>{
    console.log("server is runniung on port 5001");
});

