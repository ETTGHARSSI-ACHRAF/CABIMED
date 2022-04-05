import React from 'react'
import FormAutreInfoCabinet from '../Components/FormAutreInfoCabinet'
import FormCabinet from '../Components/FormCabinet'
import FormMedecin from '../Components/FormMedecin'


const Cabinet = () => {
    return (
        <>
            <div className='flex place-content-center w-full flex-col md:flex-row'>
                <FormMedecin />
                <FormCabinet />

            </div>
            <FormAutreInfoCabinet />
        </>
    )
          
}

export default Cabinet