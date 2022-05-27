const Medecin = require("../models/medecinModel");
const generator = require("generate-password");
const bcrypt = require("bcrypt");
const Mail = require('../mail/sendMail');
const jsonwebtoken = require("jsonwebtoken");


const createMedecin = async (req, res) => {
    try {
        const {nom, prenom, email} = req.body;
        if(!nom || !prenom || !email){
            return res.status(200).json({
                success : 0,
                message : 'tous les champs sont obligatoire'
            })
        }else{
            const password = generator.generate({
                length: 10,
                numbers: true,
              });
            const medecin = new Medecin({
                nom_medecin : nom,
                prenom_medecin : prenom,
                email_medecin : email,
                password_medecin : bcrypt.hashSync(password, 10),
            });
            const newMedecin = await medecin.save();
            await Mail(email, nom, prenom, password);
            return res.status(200).json({
                success: 1,
                newMedecin
            });
        }  
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
        const {nom, prenom, email, tele, specialite, password_anc, password} = req.body;
        if(!nom || !prenom || !email ||  !tele || !specialite){
            return res.status(200).json({
                success : 0,
                message : 'tous les champs sont obligatoire'
            })
        }else{
        if(password){
            const chekPassword = await ChekPassword(email,password_anc)
            
            if(chekPassword){

                newDAtaMedecin = {
                    nom_medecin : nom,
                    prenom_medecin : prenom,
                    email_medecin : email,
                    tele_medecin : tele,
                    specialite_medecin : specialite,
                    password_medecin : bcrypt.hashSync(password, 10),
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
                nom_medecin : nom,
                prenom_medecin : prenom,
                email_medecin : email,
                tele_medecin : tele,
                specialite_medecin : specialite,
            }
            const medecin = await Medecin.updateOne({ _id: req.params.id }, newDAtaMedecin);
            return  res.status(200).json({
                success: 1,
                medecin
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

const loginMedecin = async (req, res) => {
    try {
        if(!req.body.email || !req.body.password ){
            return res.status(200).json({
                success: 0,
                message: 'tous les champs sont obligatoire'
            })
        }else{
            const medecin = await Medecin.find({ email_medecin : req.body.email });
        if (medecin.length !== 0) {
            const comparePassword = bcrypt.compareSync(
                req.body.password,
                medecin[0].password_medecin
            );
            if (comparePassword) {
                medecin[0].password_medecin = undefined;
                const token = jsonwebtoken.sign(
                    { result: medecin[0] },
                    process.env.SECRET_KEY_MED,
                    {
                        expiresIn: "24h",
                    }
                );
                res.status(200).json({
                    success: 1,
                    token: token,
                });
            } else {
                res.status(200).json({
                    success: 0,
                    message: "passwor or email incorrect1",
                });
            }
        } else {
            res.status(401).json({
                success: 0,
                message: "passwor or email incorrect2",
            });
        }
        }
    } catch (error) {
        return res.status(400).json({
            success: 0,
            message: error.message
        })
    }
}

module.exports = {
    createMedecin,
    updateMedecin,
    getMedecinById,
    loginMedecin
}