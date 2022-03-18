const Cabinet = require("../models/cabinetModel");



const createCabinet = async (req, res) => {
    try {
        const cabinet = new Cabinet({
            nom_cabinet : req.body.nom,
            logo_cabinet : req.logo,
            patente_cabinet : req.body.patente,
            info_cabinet : req.body.info,
            tele_cabinet : req.body.tele,
            fax_cabinet: req.body.fax,
            adresse_cabinet : req.body.adresse
        });
        
        const newCabinet = await cabinet.save();
        return res.status(200).json({
            success: 1,
            newCabinet
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const updateCabinet = async (req,res) =>{
    try{
        var newDAtaCabinet = {};
        if(req.logo){
                newDAtaCabinet = {
                    nom_cabinet : req.body.nom,
                    logo_cabinet : req.logo,
                    patente_cabinet : req.body.patente,
                    info_cabinet : req.body.info,
                    tele_cabinet : req.body.tele,
                    fax_cabinet: req.body.fax,
                    adresse_cabinet : req.body.adresse
                }
                const cabinet = await Cabinet.updateOne({ _id: req.params.id }, newDAtaCabinet);
                return res.status(200).json({
                    success: 1,
                    cabinet
                });
                
            }else{
            newDAtaCabinet = {
            nom_cabinet : req.body.nom,
            patente_cabinet : req.body.patente,
            info_cabinet : req.body.info,
            tele_cabinet : req.body.tele,
            fax_cabinet: req.body.fax,
            adresse_cabinet : req.body.adresse
            }
            const cabinet = await Cabinet.updateOne({ _id: req.params.id }, newDAtaCabinet);
            return  res.status(200).json({
                success: 1,
                cabinet
            });
            
        }
       
    
    }catch(error){
        return res.status(400).json({
            success : 0,
            message:error.message
        })
    }
}

const getCabinets = async (req, res) =>{
    try{
    const cabinet = await Cabinet.find();
    return res.status(200).json({
        success: 1,
        cabinet
    });
} catch (error) {
    return res.status(500).json({
        success: 0,
        message: error.message,
    });
}

}


module.exports = {
    createCabinet,
    updateCabinet,
    getCabinets
}