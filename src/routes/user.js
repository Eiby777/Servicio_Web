const express = require("express");
const { send } = require("express/lib/response");
const userSchema = require("../Modelos/Registros");

const router = express.Router();

router.post("/registros", async (req, res)=>{
    const record = userSchema(req.body);
    await record
    .save();
    /*.then((data) => res.json(data))
    .catch((error) => res.json({message: error}));*/
    res.send("POST Recibido");
});
router.get("/registros", async (req, res)=>{
    const registros = await userSchema.find();
    res.send(registros);
});
module.exports = router;