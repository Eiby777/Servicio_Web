const express = require("express");
var app = express();
app.use(express.json());
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

app.use("/api", userRoutes);

mongoose.connect("mongodb+srv://eiby:12345@cluster0.9kbs7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("Conectado a MongoDB"));

app.listen(3000, ()=>{
    console.log("Servidor corriendo", 3000);
})