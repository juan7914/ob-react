import React, { useState, useEffect } from 'react'
import List from '../models/list.class.js'
import ListForm from '../pure/form/ListForm.jsx';
import ListComponents from '../pure/list.jsx';


function ListContactComponent() {
    const contact1 = new List({name :'Juan' , direction:'Villavicencio' , phone:"3145678" , connection:false});
    const contact2 = new List({name :'Juan' , direction:'Villavicencio' , phone:"3145678", connection:false});
    const contact3 = new List({name :'Juan' , direction:'Villavicencio' , phone:"3145678", connection:false});
  
    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    useEffect(() => {
        console.log('state modified');

        return () => {
        console.log("List_contact is going  to unmount ");};

    }, [contacts]);

    function listConnexion (contact){
        console.log("complete this contact",  contact);
       const index = contacts.indexOf(contact)
       const tempList = [...contacts];
       tempList[index].connection = !tempList[index].connection
        //we update the state of the component  and it will update the 
        //iteration of the task in order to show update task
        setContacts(tempList)         
   }

   function deleteList(contact){
    console.log("delete the contact");
    const index = contacts.indexOf(contact)
    const tempList = [...contacts]
    tempList.splice(index, 1)
    setContacts(tempList)
   }
    
   function addList(contact){
    console.log("added the contact");   
    const tempList = [...contacts]
    tempList.push(contact)
    setContacts(tempList)
   }
    
  return (
    <div>
    <div className='col-12'>
         <div className='card'>
             {/* CARD HEADER (title)*/}
             <div className='card-header p-3'>
                 <h1>YOU LIST OF CONTACTS</h1>
             </div>
              {/* CARD BODY (contend)*/}
              {/* data-mdb-perfect-scrollbar='true' */}
              <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position : 'relative', height:'400px'}}>
                 <table className="table table-success table-striped">
                     <thead>
                         <tr>
                             <th scope='col'>Name</th>
                             <th scope='col'>Direction</th>
                             <th scope='col'>phone</th>
                             <th scope='col'>Actions</th>                                    
                         </tr>
                     </thead>
                     <tbody>
                         { 
                            contacts.map((el , index)=> {
                                return(
                                    <ListComponents
                                        contacts = {el}
                                        key = {index}
                                        conexion={listConnexion}
                                        remove = {deleteList}
                                    >
                                    </ListComponents>
                                )
                            })
                         } 
                         {/* <ListComponents contacts = {contacts}  conexion = {listConnexion} ></ListComponents> */}
                         {/* TODO: iterar sobre los elementos para que proyecte las tareas  */}                         
                     </tbody>
                 </table>
              </div>
              <ListForm
                add = {addList}              
              >
              </ListForm>
         </div>
    </div>
 </div>
);
};
  




export default ListContactComponent
