import React , { useEffect }from 'react'
import PropTypes from 'prop-types'
import List from '../models/list.class.js'

function ListComponents({contacts, conexion, remove}) {

    useEffect(() => {
        console.log("create contact")
        return () => {
            console.log(`contact : ${contacts.name} is goint to unmount`)
        };
    }, [contacts]);


    function listCompletedIcons (){

        if(contacts.connection){

            return <span><i className=" bi bi-toggle-on task-action"style={{color: 'green', fontSize: '20px'}}
                    onClick={()=>conexion(contacts)}></i></span>

        }else{

            return <span><i className=" bi bi-toggle-off task-action" style={{color: 'black', fontSize: '20px'}} 
                    onClick={()=>conexion(contacts)}></i></span>
        }
    } 

  return (
    <tr className='fw-normal'>
        <th>
            <span className='m-2'>{contacts.name}</span>
        </th>

        <td className='align-middle'>
          
            <span>{contacts.direction}</span>
        </td>  

        <td className='align-middle'>
          
            <span>{contacts.phone}</span>
        </td>       

        <td className='align-middle'>
          {/* sustituir por Iconos mediante uan funcion */}
          <span>{listCompletedIcons()}</span>
           

        <span><i class="bi bi-trash task-action"style={{color: 'tomato'}} onClick={()=>remove(contacts)}></i></span>

        </td>
               

    </tr>
  )
}
  


ListComponents.propTypes = {
    contact: PropTypes.instanceOf(List).isRequired,
    conexion: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

}

export default ListComponents
