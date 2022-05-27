const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    nom_pat:{
        type:String,
        required:true
    },
    prenom_pat:{
        type:String,
        required:true
    },
    cin_pat:{
        type:String,
        default : null
    },
    date_naise_pat:{
        type:String,
        required:true
    },
    lieu_naise_pat:{
        type:String,
        required:true
    },
    sexe : {
        type:String,
        required:true
    },
    adresse_pat:{
        type:String,
        required:true
    },
    tele_pat:{
        type:String,
        required:true
    },
    profession_pat:{
        type:String,
        default : null
    },
    autre_info_pat:{
        type:String,
        default:null
    },
    mutuelle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mutuelle",
        default : null
    },
    certificat : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "certificat",
        }
    ],
    consultation : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "consultation",
        }
    ]
});
module.exports = mongoose.model('patient',patientSchema);