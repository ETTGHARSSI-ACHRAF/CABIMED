import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidbar from '../Components/Sidbar'
const Medecin = () => {
  return (
    <div className=" bg-gray-100  h-full flex">
            <Sidbar />
            <div className="md:ml-60 md:w-10/12 w-screen"> 
                <Outlet />
            </div>
    </div>
    )
}

export default Medecin