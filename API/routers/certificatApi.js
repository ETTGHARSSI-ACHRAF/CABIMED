const express = require('express');
const router = express.Router();
const {createCertificat}= require('../controllers/certificatController');

router.post('/',createCertificat);



module.exports = router;