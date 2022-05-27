import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'


import AddMedicament from '../Modal/Add/AddMedicament';
import UpdateMedicament from '../Modal/Update/UpdateMedicament';

const TableMedicament = () => {
  const [medicaments, setMedicaments] = useState([]);


  const getMedecaments = () =>{
    axios.get('http://localhost:8000/api/medicament',{
    // headers: {
    //   'Authorization': `Basic ${cookies.token}` 
    // }
  })
  .then(res=>{
    setMedicaments(res.data.medicament)
  })
  }
  useEffect(() => {
    getMedecaments();
  }, [])
  
 const deletMedicamnet = (id) => {
    axios.delete(`http://localhost:8000/api/medicament/${id}`)
      .then(res => {
        getMedecaments()
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <div className="bg-gray-50 h-screen overflow-x-auto">
        <div>
          <div className="p-4">
            <div className="bg-white p-4 rounded-md">
              <div>
                <div className="flex justify-between items-center my-2">
                  <h2 className="mb-4 text-xl font-bold text-sky-500">Les Medicaments</h2>
                  <AddMedicament />
                </div>

                <table className="min-w-full">
                  <thead>
                    <tr >
                      <th className="px-6 py-3 border-b-2 border-sky-300 text-left leading-4 text-sky-500 tracking-wider">Nom</th>
                      <th className="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Forme</th>
                      <th className="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Classe</th>
                      <th className="px-6 py-3 border-b-2 border-sky-300"></th>
                    </tr>
                  </thead>
                  <tbody >
                    {medicaments?.map(medicament => (
                      <tr key={medicament._id}>
                        <td className="px-6 py-4 border-b  text-sm">{medicament.nom_med}</td>
                      <td className="px-6 py-4   border-b  text-sm">{medicament.forme_med}</td>
                      <td className="px-6 py-4   border-b  text-sm">{medicament.classe_med}</td>
                      <td className="px-6 py-4  text-right border-b  text-sm ">
                        <button className="p-2 mr-2 border-sky-500 border text-sky-500 rounded transition duration-300 hover:bg-sky-500 hover:text-white focus:outline-none" onClick={()=>{deletMedicamnet(medicament._id)}} ><AiFillDelete /></button>
                        <UpdateMedicament medicament={medicament} getMedecaments={getMedecaments()}/>
                      </td>
                    </tr>
                    ))}

                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default TableMedicament