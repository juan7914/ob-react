/*
ejemplos hook
*-- useState();
*-- useContext();

*/
import React , {useState, useContext}from 'react';

// componente 1 dispone de un contexto  
//que va tener un valor que recibe desde el padre


// creamos un miContexto global con valor inicia-  null que va hacer rellenado  con el estado del componente padre

const miContexto = React.createContext(null)


const Componente1 = () => {
 
    // creamos el contexto del componente y lo inicializamos con loque venga del contexto global
    // osea los datos que llegan del estado del componente padre

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es : {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                La sesion es : {state.sesion}
            </h1>
        </div>
    );
}



export default function MiComponentePadreContexto() {
    const estadoInicial = {
        token : "1234",
        sesion: 1
    }

    // creamos el estado del componente padre
    
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData({
            token : "JWT1234567890",
            sesion: sesionData.sesion + 1
        })
    };

  return (
    <miContexto.Provider value={sesionData}>
        {/* todo lo que esta aqui adentro puede leer los datos de sesionData y actualizarce */}
        {/* // renderizar Componente1 */}
        <h1>***Ejemplo de useState() y useContext()***</h1>
        <Componente1></Componente1> 
        {/* el boton que cambia el estado     */}
        <button onClick={actualizarSesion}>Actualizar_Sesion</button>
    </miContexto.Provider>
  )
}


