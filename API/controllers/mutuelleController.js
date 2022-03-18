const Mutuelle = require("../models/mutuelleModel");




const createMutuelle = async (req, res) => {
    try {
        const mutuelle = new Mutuelle({
            type_mutuelle : req.body.type
        });
        const newMutulle = await mutuelle.save();
        return res.status(200).json({
            success: 1,
            newMutulle
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getAllMutuelles = async (req, res) => {
    try {
        const mutuelle = await Mutuelle.find();
        return res.status(200).json({
            success: 1,
            mutuelle,
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const deleteMutuelle = async (req,res) =>{
    try{
        const mutuelle = await Mutuelle.remove({_id:req.params.id})
        return res.status(200).json({
         success:1,
         mutuelle
     });
     }catch(error){
        return res.status(400).json({
             success : 0,
             message:error.message
         })
     }
}

const updateMutuelle = async (req,res) =>{
    const newDAtaMutuelle= {
        type_mutuelle : req.body.type
    };
    try{
       const mutuelle = await Mutuelle.updateOne({_id:req.params.id},newDAtaMutuelle);
       return res.status(200).json({
        success:1,
        mutuelle
    });
    }catch(error){
        return  res.status(400).json({
            success : 0,
            message:error.message
        })
    }
}

module.exports = {
    createMutuelle,
    deleteMutuelle,
    updateMutuelle,
    getAllMutuelles
}