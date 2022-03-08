const mongoose = require('mongoose');

const mutuelleSchema = new mongoose.Schema({
    type_mutuelle:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('mutuelle',mutuelleSchema);