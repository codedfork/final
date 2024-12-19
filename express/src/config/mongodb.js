const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/product-api").then((response)=>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.log("Mongodb connection failed",error);
})
