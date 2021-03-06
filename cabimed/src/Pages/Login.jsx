import React from 'react'
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative back"><div className=""></div>
    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl">Bonjour 👋 Docteur Bienvenu Chez CABIMED </h1>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
              </div>
              <div className="space-y-5">
                          <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                <input  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="mail@gmail.com"/>
                </div>
                            <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="password" placeholder="Enter your password"/>
              </div>
              <div>
                <NavLink to='/medecin/cabinet'   className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                  Connexion
                </NavLink>
              </div>
              </div>
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright CABIMED © 2021-2022
                </span>
              </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Login