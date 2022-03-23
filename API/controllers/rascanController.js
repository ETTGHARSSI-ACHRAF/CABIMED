const Rascan = require("../models/rascanModel");

const createRascan = async (req, res) => {
    try {
        const { type, nom } = req.body;
        if (!type || !nom) {
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        } else {
            const rascan = new Rascan({
                type_rascan: type,
                nom_rascan: nom
            });
            const newRascan = await rascan.save();
            return res.status(200).json({
                success: 1,
                newRascan
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getAllRascans = async (req, res) => {
    try {
        const rascans = await Rascan.find();
        return res.status(200).json({
            success: 1,
            rascans
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const deleteRascan = async (req, res) => {
    try {
        const rascan = await Rascan.remove({ _id: req.params.id })
        return res.status(200).json({
            success: 1,
            rascan
        });
    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}

const updateRascan = async (req, res) => {
    try {
        const { type, nom } = req.body;
        if (!type || !nom) {
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        } else {
            const newDAtaRascan = {
                type_rascan: type,
                nom_rascan: nom
            };
            const rascan = await Rascan.updateOne({ _id: req.params.id }, newDAtaRascan);
            return res.status(200).json({
                success: 1,
                rascan
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
    createRascan,
    deleteRascan,
    updateRascan,
    getAllRascans
}