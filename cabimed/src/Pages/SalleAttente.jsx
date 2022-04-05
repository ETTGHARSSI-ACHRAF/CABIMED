import React from 'react'
import TableSalleAttente from '../Components/Table/TableSalleAttente'

const SalleAttente = () => {
  return (
    <div class="bg-gray-50 min-h-screen ">

      <div>
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <div class="flex justify-between items-center my-2">
                <h2 class="mb-4 text-xl font-bold text-sky-500 ">salle d'attente</h2>
                
              </div>
    <TableSalleAttente/>
            </div> 
          </div>
        </div>
      </div>
    </div>

  )
}

export default SalleAttente