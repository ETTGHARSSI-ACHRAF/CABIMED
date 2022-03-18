const express = require('express');
const router = express.Router();
const {createCabinet,updateCabinet,getCabinets}= require('../controllers/cabinetController');
const upload = require('../middleware/upload')

router.get('/',getCabinets);
router.post('/',upload,createCabinet);
router.patch('/:id',upload,updateCabinet);



module.exports = router;