import React from 'react';
import {useHistory, useLocation}from 'react-router-dom'

const About = () => {
    const location = useLocation();
    console.log('we are  in route : ', location.pathname)

     const history = useHistory();

    const navegator=(path) =>{
        history.push(path)
    }

    const GoBack = ()=>{
        history.goBack()
    }
    return (
        <div>
            <h2>About | Faqs</h2>
            <button onClick={() => navegator('/')}>Got to Home</button>
            <button onClick={GoBack}>Go Back</button>
        </div>
    );
}

export default About;
