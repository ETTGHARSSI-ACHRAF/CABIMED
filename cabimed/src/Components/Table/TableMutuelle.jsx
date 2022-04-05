import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

import AddMutuelle from '../Modal/Add/AddMutuelle'
import UpdateMutuelle from '../Modal/Update/UpdateMutuelle'

const TableMutuelle = () => {
  return (
    <div class="bg-gray-50 min-h-screen">
  
    <div>
      <div class="p-4">
        <div class="bg-white p-4 rounded-md">
          <div>
              <div class="flex justify-between items-center my-2">
              <h2 class="mb-4 text-xl font-bold text-gray-700">Les Rascans</h2>
              <AddMutuelle/>
              </div>
            
              <table class="min-w-full">
                  <thead>
                    <tr >
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left leading-4 text-sky-500 tracking-wider">Type</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300"></th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td class="px-6 py-4 border-b  text-sm">Azix 1000Mg</td>
                      <td class="px-6 py-4  text-right border-b  text-sm ">
                        <button class="p-2 mr-2 border-sky-500 border text-sky-500 rounded transition duration-300 hover:bg-sky-500 hover:text-white focus:outline-none"><AiFillDelete /></button>
                        <UpdateMutuelle/>
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

export default TableMutuelle