const mongoose = require('mongoose');

const conexionDB = async ()=>{
    try {
        const DB = await mongoose.connect('mongodb://localhost:27017/registros', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Conexión satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
}
module.exports = conexionDB;

