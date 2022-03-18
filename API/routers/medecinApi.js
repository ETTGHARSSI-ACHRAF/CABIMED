const express = require('express');
const router = express.Router();
const {createMedecin,updateMedecin,getMedecinById}= require('../controllers/medecinController');


router.post('/',createMedecin);
router.patch('/:id',updateMedecin);
router.get('/:id',getMedecinById);


module.exports = router;