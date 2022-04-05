import React from 'react'

const FormCabinet = () => {
    return (
        <div class="p-4 text-gray-500  md:w-6/12 bg-white py-6 rounded-md px-10 m-5  md:m-10 shadow-md">
            <h1 class="text-center text-lg font-bold text-sky-400">Information cabinet</h1>
            <div class="space-y-4 mt-6">
                <div>

                </div>
                <div class="w-full">
                    <input type="text" placeholder="Nom cabinet" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
                </div>
                <div class="flex items-center justify-center bg-grey-lighter">
                    <input type="file" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
                </div>
                <div class="w-full">
                    <input type="text" placeholder="patent" class="px-4 py-2 bg-gray-50 w-full rounded-md" />
                </div>
                <div class="w-full">
                    <textarea rows="3" maxlength="210" x-model="maximum" x-ref="maximum" placeholder='description'
                        class="block w-full bg-gray-50  mt-1 py-2 px-3 rounded-md  shadow-sm focus:outline-none"></textarea>
                </div>

            </div>
            <button class="w-full mt-5 bg-sky-400 text-white py-2 rounded-md font-semibold tracking-tight">Enregistrer</button>

        </div>
    )
}

export default FormCabinet