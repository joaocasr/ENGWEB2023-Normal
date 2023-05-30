const mongoose = require('mongoose')


var EspecieSchema = new mongoose.Schema({
    _id: Number,
    nome: String
})

var plantaSchema = new mongoose.Schema({
    _id: Number,
    "Numero_de_Registo": Number,
    Rua: String,
    Local: String,
    Freguesia:String,
    "Especie":EspecieSchema,
    "Nome_Cientifico":String,
    "Origem":String,
    "Data_de_Plantacao": String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    "Implantacao": String,
    Gestor: String,
    "Data_de_actualizacao": String,
    "Numero_de_intervencoes": String
})
module.exports = mongoose.model('plantas', plantaSchema)