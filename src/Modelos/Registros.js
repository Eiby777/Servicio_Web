const mongoose = require("mongoose");
//const { default: mongoose } = require("mongoose");
//const {Schema , model} = require("mongoose");

const Registros = new mongoose.Schema ({
    nombre:{
        type: String,
        required: true 
    },
    apellido: {
        type: String,
        required: true 
    },
    telefono: {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model("Registros", Registros);