const express = require('express');
const router = express.Router();
const {createMedicament,updateMedicament,deleteMedicament,getAllMedicaments}= require('../controllers/medicamentController');

router.post('/',createMedicament);
router.get('/',getAllMedicaments);
router.delete('/:id',deleteMedicament);
router.patch('/:id',updateMedicament);


module.exports = router;