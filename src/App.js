//import logo from './logo.svg';
import './App.css';
//import Ejemplo2 from './components/hooks/ejemplo2';
// import Ejemplo1 from './components/hooks/ejemplo1';
//import MiComponentePadreContexto from "./components/hooks/Ejemplo3"
//import TaskListComponents from './components/container/task_list';
//import ListFormik from './components/pure/form/listFormik';
import RegisterFormik from './components/pure/form/RegisterFormik';
//import ListContactComponent from './components/container/list_contact.jsx'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponentePadreContexto></MiComponentePadreContexto>   */}
        {/* <ListFormik></ListFormik> */}
        {/* <TaskListComponents></TaskListComponents> */}
        {/* <ListContactComponent></ListContactComponent> */}
        <RegisterFormik></RegisterFormik>
      {/* </header> */}
    </div>
  );
}

export default App;
