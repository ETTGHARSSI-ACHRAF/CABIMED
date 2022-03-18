const mongoose = require('mongoose');

const cabinetSchema = new mongoose.Schema({
    nom_cabinet:{
        type:String,
        required:true
    },
    logo_cabinet:{
        type:String,
        required:true
    },
    patente_cabinet:{
        type:Number,
        required:true
    },
    info_cabinet :{
        type:String,
        default:null
    },
    tele_cabinet :{
        type:String,
        default:null
    },
    fax_cabinet:{
        type:Number,
        required:true
    },
    adresse_cabinet:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('cabinet',cabinetSchema);