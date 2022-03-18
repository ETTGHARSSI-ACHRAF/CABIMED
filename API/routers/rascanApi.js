const express = require('express');
const router = express.Router();
const {createRascan,deleteRascan,updateRascan,getAllRascans}= require('../controllers/rascanController');

router.post('/',createRascan);
router.get('/',getAllRascans);
router.delete('/:id',deleteRascan);
router.patch('/:id',updateRascan);


module.exports = router;