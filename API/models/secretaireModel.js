const mongoose = require('mongoose');

const secretaireSchema = new mongoose.Schema({
    nom_secretaire:{
        type:String,
        required:true
    },
    prenom_secretaire:{
        type:String,
        required:true
    },
    email_secretaire:{
        type:String,
        required:true
    },
    tele_secretaire:{
        type:String,
        default:null
    },
    password_secretaire:{
        type:String,
        required:true
    },
    salaire_secretaire:{
        type:Number,
        required:true
    },
    role: {
         type : String,
         default : 'secretaire'
    }
});
module.exports = mongoose.model('secretaire',secretaireSchema);