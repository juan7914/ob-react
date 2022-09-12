import React from 'react';
import {useHistory} from 'react-router-dom'

const ProfilePage = ({user}) => {
     const history = useHistory();

      const navegatorTo=(path)=>{
        history.push(path)
     }

     const goBack= ()=>{
        history.goBack();
     }
    return (
        <div>
            <h2>profile</h2>
           <button onClick={()=> navegatorTo('/tasks')}>you tasks</button>

            <button onClick={goBack}>GoBack</button>
        </div>
    );
}

export default ProfilePage;
