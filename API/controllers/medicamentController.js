const Medicament = require("../models/medicamentModel");




const createMedicament = async (req, res) => {
    try {
        const medicament = new Medicament({
            nom_med : req.body.nom,
            forme_med : req.body.forme,
            classe_med : req.body.classe
        });
        const newMedicament = await medicament.save();
        res.status(200).json({
            success: 1,
            newMedicament
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getAllMedicaments = async (req, res) => {
    try {
        const medicament = await Medicament.find();
        res.status(200).json({
            success: 1,
            medicament
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const deleteMedicament= async (req,res) =>{
    try{
        const medicament = await Medicament.remove({_id:req.params.id})
        res.status(200).json({
         success:1,
         medicament
     });
     }catch(error){
         res.status(400).json({
             success : 0,
             message:error.message
         })
     }
}

const updateMedicament = async (req,res) =>{
    const newDAtaMedicament= {
        nom_med : req.body.nom,
        forme_med : req.body.forme,
        classe_med : req.body.classe
    };
    try{
       const medicament  = await Medicament.updateOne({_id:req.params.id},newDAtaMedicament);
       res.status(200).json({
        success:1,
        medicament
    });
    }catch(error){
        res.status(400).json({
            success : 0,
            message:error.message
        })
    }
}

module.exports = {
    createMedicament,
    deleteMedicament,
    updateMedicament,
    getAllMedicaments
}