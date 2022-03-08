const express = require('express');
const router = express.Router();
const {createMutuelle,updateMutuelle,deleteMutuelle,getAllMutuelles}= require('../controllers/mutuelleController');

router.post('/',createMutuelle);
router.get('/',getAllMutuelles);
router.delete('/:id',deleteMutuelle);
router.patch('/:id',updateMutuelle);


module.exports = router;