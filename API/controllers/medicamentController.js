const Medicament = require("../models/medicamentModel");

const createMedicament = async (req, res) => {
    try {
        const { nom, forme, classe } = req.body;
        if (!nom || !forme || !classe) {
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        } else {
            const medicament = new Medicament({
                nom_med: nom,
                forme_med: forme,
                classe_med: classe
            });
            const newMedicament = await medicament.save();
            return res.status(200).json({
                success: 1,
                newMedicament
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getAllMedicaments = async (req, res) => {
    try {
        const medicament = await Medicament.find();
        return res.status(200).json({
            success: 1,
            medicament
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const deleteMedicament = async (req, res) => {
    try {
        const medicament = await Medicament.remove({ _id: req.params.id })
        return res.status(200).json({
            success: 1,
            medicament
        });
    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}

const updateMedicament = async (req, res) => {
    try {
        const { nom, forme, classe } = req.body;
        if (!nom || !forme || !classe) {
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        } else {
            const newDAtaMedicament = {
                nom_med: nom,
                forme_med: forme,
                classe_med: classe
            };

            const medicament = await Medicament.updateOne({ _id: req.params.id }, newDAtaMedicament);
            return res.status(200).json({
                success: 1,
                medicament
            });
        }

    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}

module.exports = {
    createMedicament,
    deleteMedicament,
    updateMedicament,
    getAllMedicaments
}