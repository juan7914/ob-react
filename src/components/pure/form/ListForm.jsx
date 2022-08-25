import React,{ useRef } from 'react'
import PropTypes from 'prop-types'
import List from '../../models/list.class.js'

function ListForm({add}) {

    const nameRef = useRef('');
    const directionRef = useRef('');
    const phoneRef = useRef('');

    function onSubmitList(e){
        e.preventDefault();
         const newContact= new List({
            name : nameRef.current.value,
            direction: directionRef.current.value,
            phone : phoneRef.current.value,
            connection: false

        })
        add(newContact)
    }
    
    

  return (
    <form onSubmit={onSubmitList} className='d-flex justify-content-center align-items-center mb-4'>
    <div className='form-outline flex-fill'>
        <input ref={nameRef}  id='inputName' type='text' className='form-control form-control-lg' placeholder= 'Name' required autoFocus/>
        <input ref={directionRef}  id='inputDirection' type='text' className='form-control form-control-lg'  placeholder= 'Direction' required />
        <input ref={phoneRef}  id='inputPhone' type='text' className='form-control form-control-lg'  placeholder= 'Phone' required />
               
    </div>
    <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
</form>
  )
}

ListForm.propTypes = {
    add : PropTypes.func.isRequired
}

export default ListForm
