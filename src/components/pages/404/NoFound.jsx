import React from 'react';
import {useHistory} from 'react-router-dom';

const NoFound = () => {

     const history = useHistory();

     const navegatorTo = (path)=>{
        history.push(path)
     }
    return (
        <div>
            <h1>404- page not found</h1>

            <button onClick={ ()=>navegatorTo('/')}>Got to Home</button>
        </div>
    );
}

export default NoFound;
