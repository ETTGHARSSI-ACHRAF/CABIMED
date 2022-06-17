import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import AddRascan from '../Modal/Add/AddRascan'
import UpdateRascan from '../Modal/Update/UpdateRascan'

const TableRascan = () => {

  const [rascans, setRascans] = useState([]);

  const getRascans = () =>{
    axios.get('http://localhost:8000/api/rascan',{
    // headers: {
    //   'Authorization': `Basic ${cookies.token}` 
    // }
  })
  .then(res=>{
    setRascans(res.data.rascans)
  })
  }
  useEffect(() => {
    getRascans();
  }, [])

  const deletRascan = (id) => {
    axios.delete(`http://localhost:8000/api/rascan/${id}`)
      .then(res => {
        getRascans()
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div class="bg-gray-50 min-h-screen  overflow-x-auto">

      <div>
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <div class="flex justify-between items-center my-2">
                <h2 class="mb-4 text-xl font-bold text-gray-700">Les Rascans</h2>
                <AddRascan />
              </div>
              
                <table class="min-w-full">
                  <thead>
                    <tr >
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left leading-4 text-sky-500 tracking-wider">Type</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Nom</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300"></th>
                    </tr>
                  </thead>
                  <tbody >
                  {rascans?.map(rascan => (
                    <tr key={rascan._id}>
                      <td class="px-6 py-4 border-b  text-sm">{rascan.type_rascan}</td>
                      <td class="px-6 py-4   border-b  text-sm">{rascan.nom_rascan}</td>
                      <td class="px-6 py-4  text-right border-b  text-sm ">
                        <button class="p-2 mr-2 border-sky-500 border text-sky-500 rounded transition duration-300 hover:bg-sky-500 hover:text-white focus:outline-none" onClick={()=>{deletRascan(rascan._id)}}><AiFillDelete /></button>
                        <UpdateRascan rascan={rascan} getRascans={getRascans()}/>
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
  )
}

export default TableRascan