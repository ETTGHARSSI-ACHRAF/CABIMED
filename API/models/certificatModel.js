const mongoose = require('mongoose');

const certificatSchema = new mongoose.Schema({
    date_certif:{
        type:Date,
        required:true,
        default: new Date()
    },
    date_debut_certif:{
        type:Date,
        required:true
    },
    date_fin_certif:{
        type:Date,
        required:true
    },
    type_certif : {
        type:String,
        required : true,
        enum : ['Maladie','Permis'],
    },
    description_certif:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('certificat',certificatSchema);