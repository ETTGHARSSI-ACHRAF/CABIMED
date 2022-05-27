require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors');
const connectDB = require ("./config/db");
const multer = require("multer");

// for use api in any port frontend
app.use(cors({
    origin : '*',
    methods : ['GET','POST','DELETE','PATCH']
}));

app.use(express.urlencoded({extended:false}));
// type all result json
app.use(express.json())

// connect mongoose database
connectDB();

// pathe of Mutuelle
const mutuelle = require('./routers/mutuelleApi');
app.use('/api/mutuelle', mutuelle);

// pathe of Medicament
const medicament = require('./routers/MedicametApi');
app.use('/api/medicament', medicament);

// pathe of Rascan
const rascan = require('./routers/rascanApi');
app.use('/api/rascan', rascan);

// pathe of Medecin
const medecin = require('./routers/medecinApi');
app.use('/api/medecin', medecin);

// pathe of Cabinet
const cabinet = require('./routers/cabinetApi');
app.use('/api/cabinet', cabinet);

// pathe of Secretaire
const secretaire = require('./routers/secretaireApi');
app.use('/api/secretaire', secretaire);

// pathe of Certificat
const certificat = require('./routers/certificatApi');
app.use('/api/certificat', certificat);

// pathe of Consultation
const consultation = require('./routers/consultationApi');
app.use('/api/consultation', consultation);

// pathe of PAtient
const patient = require('./routers/patientApi');
app.use('/api/patient', patient);

// set up server
app.listen(process.env.APP_PORT, () => console.log(`started on port ', ${process.env.APP_PORT}`));