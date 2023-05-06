import React, { useState } from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import { AiFillFolder } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';

function DocumentFileCard2({title}) {
    const [pdfid, setPdfId] = useState();

    // Delete Api
    const deleteFile = () => {
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
  
      fetch(`https://backend-apis.pasha.org.uk/delete-noneAlcohlicPerfume`, requestOptions)
        .then(response => response.json())
        .then(result => {
          alert(result?.message)
          console.log(result)

        }
        )
        .catch(error => console.log('error', error));
    }
    //
    
  return (
    <>
        <div className='border bg-white border-1 rounded w-100 h-auto'>
            <div className='w-100 fs-1 d-flex'style={{height: '150px'}}>
                <BsFiletypePdf className="text-danger m-auto" size={70}/>
                <RxCrossCircled size={20} className='text-warning' onClick={deleteFile}/>
            </div>
            <div className='border border-2 text-whited-flex flex-row w-100'>
                <div className='text-secondary py-2 mr-auto'>
                    <BsFiletypePdf className='text-danger fs-4 mx-2'/><span style={{fontSize: '13px', fontWeight: '500'}}>{title}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DocumentFileCard2