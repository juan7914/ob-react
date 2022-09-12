import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './components/pages/About/About.jsx';
import Homepage from './components/pages/home/Homepage.jsx';
import Nofound from './components/pages/404/NoFound.jsx';
import ProfilePage from './components/pages/profile/ProfilePage.jsx';
import Taskpage from './components/pages/Task/Taskpage.jsx';
import TaskDetails from './components/pages/Task/TaskDetails.jsx';
 
const AppRutingOne = () => {

    return (        
            <Router>
                <div>            
                    <aside>
                        <Link to='/'>|| HOME |</Link>
                        <Link to ='/About'>| ABOUT |</Link>
                        <Link to ='/Faqs'>| FAQS |</Link>
                        <Link to ='/any404'>|NOTFOUND||</Link>
                    </aside>
                    <main>
                        <Switch>
                            <Route exact path='/' component={Homepage}/>
                            <Route path='/(About|Faqs)' component={About}/>
                            <Route path='/profile' component={ProfilePage}></Route>
                            <Route path='/tasks' component={Taskpage}></Route>
                            <Route path='/task/:id' component={TaskDetails}></Route>
                            <Route component={Nofound}/>
                        </Switch>
                    </main>

                </div>    
            </Router>        
    );
}

export default AppRutingOne;
