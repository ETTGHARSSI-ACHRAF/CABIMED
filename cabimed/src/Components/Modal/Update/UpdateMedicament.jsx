import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
const UpdateMedicament = ({nom}) => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <button className="p-2  border-sky-500 border text-sky-500 rounded transition duration-300 hover:bg-sky-500 hover:text-white focus:outline-none" onClick={() => setOpen(true)}><GrUpdate/></button>
      {open &&
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-25">
          <div className="flex items-center justify-center min-h-screen pt-4 pb-20">

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full max-h-full p-8">


              <div className="flex justify-between items-start p-5 rounded-t border-b ">
                <h3 className="text-xl font-semibold text-sky-500 lg:text-2xl dark:text-white">
                  Update Medicament
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setOpen(false)}>
                  <AiOutlineCloseCircle className='w-5 h-5' />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="w-full">
                  <input type="text" placeholder="Nom" defaultValue={nom} className="px-4 py-2 bg-gray-50 w-full rounded-md" />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="Forme" className="px-4 py-2 bg-gray-50 w-full rounded-md" />
                </div>
                <div className="w-full">
                  <input type="text" placeholder="Classe" className="px-4 py-2 bg-gray-50 w-full rounded-md" />
                </div>
              </div>

              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="default-modal" type="button" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
                <button data-modal-toggle="default-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600" onClick={() => setOpen(false)}>Cansel</button>
              </div>
            </div>
          </div>
        </div>


      }

    </>
  )
}

export default UpdateMedicament