const mongoose = require('mongoose');

const midecinSchema = new mongoose.Schema({
    nom_medecin:{
        type:String,
        required:true
    },
    prenom_medecin:{
        type:String,
        required:true
    },
    email_medecin:{
        type:String,
        required:true
    },
    tele_medecin :{
        type:String,
        default:null
    },
    specialite_medecin :{
        type:String,
        default:null
    },
    role:{
        type : String,
        default : 'medecin'
    },
    password_medecin:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('midecin',midecinSchema);