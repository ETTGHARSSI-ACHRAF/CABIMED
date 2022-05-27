const { populate } = require("../models/patientModel");
const Patient = require("../models/patientModel");



// create Patient
const createPatient = async (req, res) => {
    try{
    // Validate request
    if (!req.body) {
       return res.status(400).send({
        message: "Content can not be empty!"
        });
    }
    
    // Create a Patient
    const patient = new Patient({
        nom_pat: req.body.nom,
        prenom_pat: req.body.prenom,
        sexe: req.body.sexe,
        cin_pat: req.body.cin,
        date_naise_pat: req.body.date_naise,
        lieu_naise_pat: req.body.lieu_naise,
        adresse_pat: req.body.adresse,
        tele_pat: req.body.tele,
        profession_pat: req.body.profession,
        autre_info_pat: req.body.autre_info,
        mutuelle: req.body.mutuelle,
        certificat: req.body.certificat,
        consultation: req.body.consultation
    });
    // Save Patient in the database
    const newPatient = await patient.save();
            return res.status(200).json({
                success: 1,
                newPatient
            });
} catch (error) {
    return res.status(500).json({
        success: 0,
        message: error.message,
    });
}
};

// add certificat to patient
const addCertificaToPatient = async (req, res) => {
    try{
        const patient = await Patient.findById(req.params.id);
        if(!patient){
            return res.status(404).json({
                success: 0,
                message: "patient not found"
            });
        }
        patient.certificat.push(req.body.certificat);
        const newPatient = await patient.save();
        return res.status(200).json({
            success: 1,
            newPatient
        });
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
};

// add consultation to patient
const addConsultationToPatient = async (req, res) => {
    try{
        const patient = await Patient.findById(req.params.id);
        if(!patient){
            return res.status(404).json({
                success: 0,
                message: "patient not found"
            });
        }
        patient.consultation.push(req.body.consultation);
        const newPatient = await patient.save();
        return res.status(200).json({
            success: 1,
            newPatient
        });
    }
    catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
};

// get all data of patient by id
const getPatientById = async (req, res) => {
    try{
        // const patient = await Patient.findById(req.params.id).populate('mutuelle').populate('certificat').populate('consultation'); 
        const patient = await Patient.findById(req.params.id).populate('mutuelle').populate('certificat').populate({ path: 'consultation', populate:({path : 'medecament_ordonnace.medicament'}) ,  populate : ({path:'rascan'}) }); 
        if(!patient){
            return res.status(404).json({
                success: 0,
                message: "patient not found"
            });
        }
        return res.status(200).json({
            success: 1,
            patient
        });
    }
    catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
};
        

module.exports = {
    createPatient,
    addCertificaToPatient,
    addConsultationToPatient,
    getPatientById
}
