const Certificat = require("../models/certificatModel");

const createCertificat = async (req, res) => {
    try {
        const {date_d, date_f, type, description} = req.body;
        if(!date_d || !date_f|| !type || !description){
            return res.status(200).json({
                success : 0,
                message : 'tous les champs sont obligatoire'
            })
        }else{
            const certificat = new Certificat({
                date_debut_certif : date_d,
                date_fin_certif : date_f,
                type_certif : type,
                description_certif : description,
            });
            
            const newCertificat = await certificat.save();
            return res.status(200).json({
                success: 1,
                newCertificat
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}




module.exports = {
    createCertificat
}