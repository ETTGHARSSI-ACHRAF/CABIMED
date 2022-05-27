const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({

    date_consult: {
        type: Date,
        required: true,
        default: new Date()
    },
    motif_consult: {
        type: String,
        required: true,
    },
    diagnostic_consult: {
        type: String,
        required: true,
    },
    conclusion_consult: {
        type: String,
        required: true,
    },
    honoraire_consult: {
        type: Number,
        required: true,
    },

    medecament_ordonnace: [
        {
            medicament: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "medicament",
            },
            nbr_prise_mat: {
                type: Number,
                default :null
            },
            nbr_prise_midi: {
                type: Number,
                default :null
            },
            nbr_prise_soire: {
                type: Number,
                default :null
            },
            nbr_jour_prise: {
                type: Number,
                required : true,
            },


        }
    ],
    rascan: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "rascan",
        }
    ]

});
module.exports = mongoose.model('consultation', consultationSchema);