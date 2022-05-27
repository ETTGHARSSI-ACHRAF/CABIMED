const express = require('express');
const router = express.Router();
const {createSecretaire, deleteSecretaire, updateSecretaire, getAllSecretaire, getSecretaireId, loginSecretaire}= require('../controllers/secretaireController');
const { checkTokenSecretaire } = require('../middleware/auth');
router.post('/', createSecretaire);
router.get('/',getAllSecretaire);
router.get('/:id',checkTokenSecretaire,getSecretaireId);
router.delete('/:id',deleteSecretaire);
router.patch('/:id',updateSecretaire);
router.post('/login', loginSecretaire);


module.exports = router;