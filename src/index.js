import React from 'react';
import ReactDOM from 'react-dom/client';
// importamos bootstrap a nuestro proyecto evolutivo arriba de todos los estilos
import 'bootstrap/dist/css/bootstrap.css';
//importamos bootstarp-icons a nuestro proyecto
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRutingOne from './App.RutingOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRutingOne/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
