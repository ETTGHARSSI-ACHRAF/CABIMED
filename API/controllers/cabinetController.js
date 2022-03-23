const Cabinet = require("../models/cabinetModel");



const createCabinet = async (req, res) => {
    try {
        const {nom, patente, info, tele, fax, adresse } = req.body;
        if(!nom || !patente || !info || !tele || !fax || !adresse){
            return res.status(200).json({
                success : 0,
                message : 'tous les champs sont obligatoire'
            })
        }else{
            const cabinet = new Cabinet({
                nom_cabinet : nom,
                logo_cabinet : req.logo,
                patente_cabinet : patente,
                info_cabinet : info,
                tele_cabinet : tele,
                fax_cabinet: fax,
                adresse_cabinet : adresse
            });
            
            const newCabinet = await cabinet.save();
            return res.status(200).json({
                success: 1,
                newCabinet
            });
        }
        
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
        const {nom, patente, info, tele, fax, adresse } = req.body;
        if(!nom || !patente || !info || !tele || !fax || !adresse){
            return res.status(200).json({
                success : 0,
                message : 'tous les champs sont obligatoire'
            })
        }else{
            if(req.logo){
                newDAtaCabinet = {
                    nom_cabinet : nom,
                    logo_cabinet : req.logo,
                    patente_cabinet : patente,
                    info_cabinet : info,
                    tele_cabinet : tele,
                    fax_cabinet: fax,
                    adresse_cabinet : adresse
                }
                const cabinet = await Cabinet.updateOne({ _id: req.params.id }, newDAtaCabinet);
                return res.status(200).json({
                    success: 1,
                    cabinet
                });
                
            }else{
            newDAtaCabinet = {
            nom_cabinet : nom,
            patente_cabinet : patente,
            info_cabinet : info,
            tele_cabinet : tele,
            fax_cabinet: fax,
            adresse_cabinet : adresse
            }
            const cabinet = await Cabinet.updateOne({ _id: req.params.id }, newDAtaCabinet);
            return  res.status(200).json({
                success: 1,
                cabinet
            });
            
        }
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