import React from 'react';
import {useLocation , useHistory} from 'react-router-dom';

const Homepage = () => {
    const location = useLocation();
    console.log('we are  in route : ', location.pathname)

     const history = useHistory();

    const navegator=(path) =>{
        history.push(path)
    }

    // const GoBack = ()=>{
    //     history.goBack()
    // }

    // const GoForward = ()=>{
    //     history.goForward();
    // }
    return (
        <div>
            <h2>Home page</h2>

            <button onClick={() =>navegator('/profile')}>
                Go to profile
            </button> 

            {/* <button onClick={ GoBack }>
                Go Back
            </button>

              <button onClick={GoForward}>
                Go Forward
            </button>           */}

        </div>
    );
}

export default Homepage;
