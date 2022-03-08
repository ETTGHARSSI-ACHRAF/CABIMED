require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// for use api in any port frontend
app.use(cors({
    origin : '*',
    methods : ['GET','POST','DELETE','PATCH']
}));

app.use(express.urlencoded({extended:false}));
// type all result json
app.use(express.json())

// connect mongoose database
mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
(err) => {
    if (err) return console.error(err)
    console.log('connected to mongoose')
});


// pathe of Mutuelle
const mutuelle = require('./routers/mutuelleApi');
app.use('/api/mutuelle', mutuelle);

// pathe of Medicament
const medicament = require('./routers/MedicametApi');
app.use('/api/medicament', medicament);

// set up server
app.listen(process.env.APP_PORT, () => console.log(`started on port ', ${process.env.APP_PORT}`));