const express = require('express');
const router = express.Router();
const {createConsultation,getConsultationById}= require('../controllers/consultationController');


router.post('/',createConsultation);
router.get('/:id',getConsultationById);


module.exports = router;