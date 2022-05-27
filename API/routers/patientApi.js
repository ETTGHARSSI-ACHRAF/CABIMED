const express = require('express');
const router = express.Router();
const {createPatient, addCertificaToPatient, addConsultationToPatient, getPatientById}= require('../controllers/patientController');

router.post('/',createPatient);
router.patch('/addCertif/:id',addCertificaToPatient);
router.patch('/addConsultation/:id',addConsultationToPatient);
router.get('/:id',getPatientById);


module.exports = router;