import React , {useEffect}from 'react'
import PropTypes from 'prop-types'
import  Task  from '../models/task.class.js';


function TaskComponents({ task, complete, remove }) {
    //console.log(task)
    // se realiza el ciloc de vida para hacer seguimiento si hubo cambio en alguna tarea

    useEffect(() => {
        console.log("create task")
        return () => {
            console.log(`Task : ${task.name} is goint to unmount`)
        };
    }, [task]);

    /* 
    FUNCTION  THST RETURN A BADGE  DEPENDING ON THE LEVEL TASK    
    */
   function taskLevelBadge(){
     switch (task.level) {
        case 'normal':
            return (
            <h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {task.level }
                </span>
            </h6>)
        case 'urgent':
            return (
            <h6 className='mb-0'>
                <span className='badge bg-warning'>
                    {task.level}
                </span>
            </h6>)
        case 'blocking':
            return (
            <h6 className='mb-0'>
                <span className='badge bg-danger'>
                    {task.level}
                </span>
            </h6>)    
        default:
            break;
    }
   }

   /*
   
   FUNCTION THAT  RETURN  ICON  DEPENDING  ON COMPLETIONS  OF THE TASK
   
   */

   function taskCompletedIcons(){

    if(task.completed){

       return <span><i className=" bi bi-toggle-on task-action"
                style={{color: 'green', fontSize: '20px'}}
                onClick={()=>complete(task)}>
            </i></span>

    }else{
        
       return <span><i className=" bi bi-toggle-off task-action"
                style={{color: 'black', fontSize: '20px'}}
                onClick={()=>complete(task)}>
            </i></span>
    }
   }

  return (

    <tr className='fw-normal'>
        <th>
            <span className='m-2'>{task.name}</span>
        </th>

        <td className='align-middle'>
          
            <span>{task.description}</span>
        </td>

        <td className='align-middle'>
          {/* sustituir por un Bagde  execute funcion  to return bagde element*/}
            <span>{taskLevelBadge()}</span>
        </td>

        <td className='align-middle'>
          {/* sustituir por Iconos mediante uan funcion */}
          <span>{taskCompletedIcons()}</span>
            {/* <span>{task.completed ?
             <i className=" bi bi-toggle-on" style={{color: 'green', fontSize: '20px'}}></i> :
             <i className=" bi bi-toggle-off" style={{color: 'black', fontSize: '20px'}}></i>}</span> */}
             {/* para eliminar */}

            <span><i class="bi bi-trash task-action"
              style={{color: 'tomato'}} onClick={()=>remove(task)}>
            </i></span>
        </td>
               

    </tr>
  )
}

TaskComponents.propTypes = {
    TaskComponents : PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponents;



