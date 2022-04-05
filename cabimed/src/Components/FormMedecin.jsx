import React from 'react'

const FormMedecin = () => {
    return (
        <div class="p-4 text-gray-500  md:w-6/12 bg-white py-6 rounded-md px-10 m-5  md:m-10 shadow-md">
        <h1 class="text-center text-lg font-bold text-sky-400">Information personnelle</h1>
        <div class="space-y-4 mt-6">
            <div class="w-full">
                <input type="text" placeholder="fullname" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div class="w-full">
                <input type="text" placeholder="username" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div class="w-full">
                <input type="text" placeholder="email" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div class="w-full">
                <input type="text" placeholder="Tele" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
            <div class="w-full">
                <input type="text" placeholder="password" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
            </div>
        </div>
        <button class="w-full mt-5 bg-sky-400 text-white py-2 rounded-md font-semibold tracking-tight">Enregistrer</button>

    </div>
    )
}

export default FormMedecin