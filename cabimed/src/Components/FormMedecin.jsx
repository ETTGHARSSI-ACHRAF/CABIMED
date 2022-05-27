import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FormMedecin = () => {
    // const [nom, setNom] = useState('achraf')
    // const [prenom, setPrenom] = useState('')
    // const [email, setEmail] = useState('')
    // const [tel, setTel] = useState('')
    // const [specialite, setSpecialite] = useState('')
    // const [password_onc,setPassword_onc] = useState('');
    // const [password,setPassword] = useState('');
    const [medecin, setMedecin] = useState({})

    const saveDateMedecin = () => {
       console.log(medecin);
        
    }
    const getDateMedecin = () => {
        axios.get('http://localhost:8000/api/medecin/623adde6cdb13f20a575be5c')
        .then(res=>{setMedecin(res.data.medecin[0])})
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        getDateMedecin();        
    }, [])
    



    return (
        <div className="p-4 text-gray-500  md:w-6/12 bg-white py-6 rounded-md px-10 m-5  md:mx-10 shadow-md">
        <h1 className="text-center text-lg font-bold text-sky-400">Information personnelle</h1>
        <div className="space-y-4 mt-6">
            <div className="w-full">
                <input type="text" placeholder="nom" defaultValue={medecin.nom_medecin} onChange={(e)=>{setMedecin({...medecin,nom_medecin:e.target.value})}}  className="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div className="w-full">
                <input type="text" placeholder="prenom" defaultValue={medecin.prenom_medecin} onChange={(e)=>{setMedecin({...medecin,prenom_medecin:e.target.value})}}  className="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div className="w-full">
                <input type="text" placeholder="email" defaultValue={medecin.email_medecin} onChange={(e)=>{setMedecin({...medecin,email_medecin:e.target.value})}}  className="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div className="w-full">
                <input type="text" placeholder="Tele" defaultValue={medecin.tele_medecin} onChange={(e)=>{setMedecin({...medecin,tele_medecin:e.target.value})}}  className="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div className="w-full">
                <input type="text" placeholder="specialite" defaultValue={medecin.specialite_medecin} onChange={(e)=>{setMedecin({...medecin,specialite_medecin:e.target.value})}}  className="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div className="w-full flex flex-row">
                <input type="text" placeholder="votre password"  className="px-4 py-2 mr-1 bg-gray-50 w-full rounded-md" />
                <input type="text" placeholder="Novau password" className="px-4 py-2 ml-1 bg-gray-50 w-full rounded-md" />
            </div>
        </div>
        <button className="w-full mt-5 bg-sky-400 text-white py-2 rounded-md font-semibold tracking-tight" onClick={()=>saveDateMedecin()} >Enregistrer</button>

    </div>
    )
}

export default FormMedecin