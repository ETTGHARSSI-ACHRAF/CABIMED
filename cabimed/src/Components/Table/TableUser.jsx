import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import AddUser from '../Modal/Add/AddUser'
import UpdateUser from '../Modal/Update/UpdateUser'

const TableUser = () => {
  return (
    <div class="bg-gray-50 min-h-screen ">

    <div>
      <div class="p-4">
        <div class="bg-white p-4 rounded-md">
          <div>
            <div class="flex justify-between items-center my-2">
              <h2 class="mb-4 text-xl font-bold text-gray-700">Les Patients</h2>
              <AddUser/>
            </div>

            <table class="min-w-full">
                  <thead>
                    <tr >
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left leading-4 text-sky-500 tracking-wider">Nom</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Prenom</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Tele</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Email</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Salaire</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300"></th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td class="px-6 py-4 border-b  text-sm">Azix 1000Mg</td>
                      <td class="px-6 py-4   border-b  text-sm">pelule</td>
                      <td class="px-6 py-4   border-b  text-sm">antibiotique</td>
                      <td class="px-6 py-4   border-b  text-sm">pelule</td>
                      <td class="px-6 py-4   border-b  text-sm">antibiotique</td>
                      <td class="px-6 py-4  text-right border-b  text-sm ">
                        <button class="p-2 mr-2 border-sky-500 border text-sky-500 rounded transition duration-300 hover:bg-sky-500 hover:text-white focus:outline-none"><AiFillDelete /></button>
                        <UpdateUser/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default TableUser