const Medecin = require("../models/medecinModel");
const generator = require("generate-password");
const bcrypt = require("bcrypt");
const Mail = require('../mail/sendMail');



const createMedecin = async (req, res) => {
    try {
        const password = generator.generate({
            length: 10,
            numbers: true,
          });
        const medecin = new Medecin({
            nom_medecin : req.body.nom,
            prenom_medecin : req.body.prenom,
            email_medecin : req.body.email,
            password_medecin : bcrypt.hashSync(password, 10),
        });
        const newMedecin = await medecin.save();
        await Mail(req.body.email, req.body.nom, req.body.prenom, password);
        return res.status(200).json({
            success: 1,
            newMedecin
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

const getMedecinById = async (req, res) =>{
    try{
    const medecin = await Medecin.find({_id:req.params.id});
    return res.status(200).json({
        success: 1,
        medecin
    });
} catch (error) {
    return res.status(500).json({
        success: 0,
        message: error.message,
    });
}

}


const ChekPassword = async (email,password) =>{
    
        const medecin = await Medecin.find({email_medecin:email});
        if(medecin.length !==0){
            const comparePassword = bcrypt.compareSync(password,medecin[0].password_medecin) 
            return comparePassword
        }else{
            return false
        }

   
}



const updateMedecin = async (req,res) =>{
    try{
        var newDAtaMedecin = {};
        if(req.body.password){
            const chekPassword = await ChekPassword(req.body.email,req.body.password_anc)
            
            if(chekPassword){
                newDAtaMedecin = {
                    nom_medecin : req.body.nom,
                    prenom_medecin : req.body.prenom,
                    email_medecin : req.body.email,
                    tele_medecin:req.body.tele,
                    specialite_medecin : req.body.specialie,
                    password_medecin : bcrypt.hashSync(req.body.password, 10),
                }
                const medecin = await Medecin.updateOne({ _id: req.params.id }, newDAtaMedecin);
                return res.status(200).json({
                    success: 1,
                    medecin
                });
                
            }{
                return res.status(400).json({
                    success : 0,
                    message:'password incorecte'
                })
                
            }
        }else{
            newDAtaMedecin = {
                nom_medecin : req.body.nom,
                prenom_medecin : req.body.prenom,
                email_medecin : req.body.email,
                tele_medecin:req.body.tele,
                specialite_medecin : req.body.specialie,
            }
            const medecin = await Medecin.updateOne({ _id: req.params.id }, newDAtaMedecin);
            return  res.status(200).json({
                success: 1,
                medecin
            });
            
        }
       
    
    }catch(error){
        return res.status(400).json({
            success : 0,
            message:error.message
        })
    }
}

module.exports = {
    createMedecin,
    updateMedecin,
    getMedecinById
}