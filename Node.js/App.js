const express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/", (req, res)=>{ 
    console.log(req.body);
    res.send("Get Post");
})

app.post("/",(req, res)=>{
    console.log(req.body);
    res.send("POST Recibido");
})

app.listen(3000, ()=>{
    console.log("Servidor corriendo", 3000);
})