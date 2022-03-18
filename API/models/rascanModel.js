const mongoose = require('mongoose');

const rascanSchema = new mongoose.Schema({
    type_rascan:{
        type:String,
        required:true
    },
    nom_rascan:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('rascan',rascanSchema);