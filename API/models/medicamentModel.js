const mongoose = require('mongoose');

const medicamentSchema = new mongoose.Schema({
    nom_med:{
        type:String,
        required:true
    },
    forme_med:{
        type:String,
        required:true
    },
    classe_med:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('medicament',medicamentSchema);