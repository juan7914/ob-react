import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../models/levels.enum';
import Task from '../../models/task.class';

const TaskForm =({ add }) =>{

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task({
            name:nameRef.current.value,            
            description :descriptionRef.current.value, 
            completed:false,           
            level : levelRef.current.value,
        }   
        );
        
        add(newTask)        
    }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nameRef}  id='inputName' type='text' className='form-control form-control-lg' placeholder= 'Name' required autoFocus/>
            <input ref={descriptionRef}  id='inputDescription' type='text' className='form-control form-control-lg'  placeholder= 'Description' required />
            <label htmlFor='selectLevel' className='sr-only'>Priority</label>
            <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                <option value={LEVELS.NORMAL}>NORMAL</option>
                <option value={LEVELS.URGENT}>URGENT</option>
                <option value={LEVELS.BLOCKING}>BLOCKING</option>
            </select>
           
        </div>
        <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
    </form>
    )
}

TaskForm.propTypes = {
add : PropTypes.func.isRequired

}

export default TaskForm
