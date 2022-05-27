const express = require('express');
const router = express.Router();
const {createMedecin,updateMedecin,getMedecinById, loginMedecin}= require('../controllers/medecinController');
const {checkTokenMedecin} =require('../middleware/auth');

router.post('/',createMedecin);
router.patch('/:id',checkTokenMedecin,updateMedecin);
router.get('/:id',getMedecinById);
router.post('/login',loginMedecin);


module.exports = router;