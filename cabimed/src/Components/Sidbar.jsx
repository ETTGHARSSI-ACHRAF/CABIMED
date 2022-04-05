import React from 'react'
import { FaClinicMedical,FaBriefcaseMedical,FaUserMd,FaFileMedicalAlt,FaHospitalUser,FaRestroom } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { FaBookMedical } from 'react-icons/fa'
import { Link, useNavigate, NavLink } from "react-router-dom";
const Sidbar = () => {
  return (
    
    <div className="md:w-2/12 sm:w-1/2 hidden md:block  bg-sky-500 rounded p-3 shadow-lg fixed h-full ">
        <div className="space-x-4 p-2 mb-5 text-center ">
                <h2 className="font-semibold text-lg text-white capitalize font-poppins tracking-wide">CABIMED</h2>
        </div>
        <ul className="space-y-2 text-sm">
            <li>
                <NavLink to='/' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400  focus:shadow-outline">
                    <RiDashboardFill className="w-5 h-5" />                    
                    <span>Dashboard</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/cabinet' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400 focus:shadow-outline">
                    <FaClinicMedical className="w-5 h-5" />
                    <span>Cabinet</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/medicament' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400 focus:shadow-outline">
                    <FaBriefcaseMedical className="w-5 h-5" />
                    <span>Medicaments</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/rascan' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400  focus:shadow-outline">
                    <FaFileMedicalAlt className="w-5 h-5" />
                    <span>Rascan</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/mutuelle' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400  focus:shadow-outline">
                    <FaBookMedical className="w-5 h-5" />
                    <span>Mutuelle</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/user' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400  focus:shadow-outline">
                    <FaUserMd className="w-5 h-5" />
                    <span>Utilisateur</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/patient' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400  focus:shadow-outline">
                    <FaHospitalUser className="w-5 h-5" />
                    <span>Patient</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/medecin/salleAttente' className="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-sky-400  focus:shadow-outline">
                    <FaRestroom className="w-5 h-5" />
                    <span>salle d'attente</span>
                </NavLink>
            </li>
            
           
        </ul>
    </div>


  )
}

export default Sidbar