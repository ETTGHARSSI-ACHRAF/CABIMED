const express = require('express');
const router = express.Router();
const {createSecretaire, deleteSecretaire, updateSecretaire, getAllSecretaire, getSecretaireId}= require('../controllers/secretaireController');

router.post('/', createSecretaire);
router.get('/',getAllSecretaire);
router.get('/:id',getSecretaireId);
router.delete('/:id',deleteSecretaire);
router.patch('/:id',updateSecretaire);


module.exports = router;