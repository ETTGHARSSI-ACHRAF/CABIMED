import React from 'react'
import { AiTwotoneFileMarkdown } from 'react-icons/ai'
import AddConsultation from '../Modal/Add/AddConsultation'
import AddOrdonnance from '../Modal/Add/AddOrdonnance'
import AddRascanPatient from '../Modal/Add/AddRascanPatient'

const TableConsultPatien = () => {
  return (
    <>
      <div className="bg-gray-50 h-screen overflow-x-auto">
        <div>
          <div className="p-4">
            <div className="bg-white p-4 rounded-md">
              <div>
                <div className="flex justify-between items-center my-2">
                  <h2 className="mb-4 text-xl font-bold text-sky-500">Nom Prenom</h2>
                   <AddConsultation/> 
                </div>

                <table class="min-w-full">
                  <thead>
                    <tr >
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left leading-4 text-sky-500 tracking-wider">Date</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Motif</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Diagnostic</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">conclustion</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Honoraire</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Rascan</th>
                      <th class="px-6 py-3 border-b-2 border-sky-300 text-left text-sm leading-4 text-sky-500 tracking-wider">Ordonance</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td class="px-6 py-4 border-b  text-sm">2022-03-27</td>
                      <td class="px-6 py-4   border-b  text-sm">gripe</td>
                      <td class="px-6 py-4   border-b  text-sm">corona</td>
                      <td class="px-6 py-4   border-b  text-sm">corona</td>
                      <td class="px-6 py-4   border-b  text-sm">150</td>
                      <td class="px-6 py-4   border-b  text-sm"><AddRascanPatient/></td>
                      <td class="px-6 py-4   border-b  text-sm"><AddOrdonnance/></td>
                      
                    </tr>
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

export default TableConsultPatien