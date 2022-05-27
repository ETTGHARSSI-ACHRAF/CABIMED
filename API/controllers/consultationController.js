const Consultation = require("../models/consultationModel");




const createConsultation = async (req, res) => {
    try {
        const {medicament, prise_mat, prise_mid, pris_soire, jour_pris,motif, diagnostic, conclusion, honoraire} = req.body;
        const medecament_ordonnace =[];
        medicament.forEach((med,index) => {
           medecament_ordonnace.push(
               {
                   medicament: med,
                   nbr_prise_mat: prise_mat[index],
                   nbr_prise_midi: prise_mid[index],
                   nbr_prise_soire: pris_soire[index],
                   nbr_jour_prise : jour_pris[index]
               }
           )
        });

            const consultation = new Consultation({
                motif_consult : motif,
                diagnostic_consult : diagnostic,
                conclusion_consult : conclusion,
                honoraire_consult : honoraire,
                medecament_ordonnace : medecament_ordonnace,
                rascan : req.body.rascan
            });
           
            const newConsultation = await consultation.save();
            return res.status(200).json({
                success: 1,
                newConsultation
            });
       
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

// get consultation by id
const getConsultationById = async (req, res) => {
    try {
        const consultation = await Consultation.findById(req.params.id).populate('rascan').populate('medecament_ordonnace.medicament');
        return res.status(200).json({
            success: 1,
            consultation,
        });
     } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}    
        





module.exports = {
    createConsultation,
    getConsultationById
}