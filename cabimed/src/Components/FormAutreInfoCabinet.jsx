import React from 'react'

const FormAutreInfoCabinet = () => {
    return (
        <div class="p-4 text-gray-500   bg-white py-6 rounded-md md:mx-10 m-5 shadow-md">
            <h1 class="text-center text-lg font-bold text-sky-400">Autre information</h1>
            <div class=" flex">
                <div class='w-1/2'>
                    <div class="p-2">
                        <input type="text" placeholder="fullname" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
                    </div>
                    <div class="p-2">
                        <input type="text" placeholder="username" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
                    </div>
                </div>
                <div class='w-1/2'>
                    <div class="p-2">
                        <input type="text" placeholder="email" class="px-4 py-2 bg-gray-50 w-full rounded-md" />

                    </div>
                    <div class="p-2">
                        <button class=" w-full   bg-sky-400 text-white py-2 rounded-md font-semibold tracking-tight">Enregistrer</button>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default FormAutreInfoCabinet