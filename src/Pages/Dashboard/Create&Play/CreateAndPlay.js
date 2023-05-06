import React, { useState } from 'react'
import Dashbaord from '../Dashboard/Dashboard'
import CreateAndPlayCards from '../../../Components/CreateAndPlayCards/CreateAndPlayCards'

function CreateAndPlay() {

    
  return (
    <>
        <Dashbaord>
                    <div className='min-vh-100' style={{backgroundColor: '#f0f8ff'}}>
                      <div>
                        <h3 className='bg-info text-white py-2 px-3'>CREATE & PLAY</h3>
                      </div>
                    <CreateAndPlayCards/>
                    </div>

        </Dashbaord>
    
    </>
  )
}

export default CreateAndPlay