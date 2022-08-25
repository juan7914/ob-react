/*
    Ejemplo de Hook useState
    crear un componente de tipo funcion  y acceder a su estado privado atravez de un hook  y ademas poder modificarlo
*/
import React , {useState} from 'react';

const Ejemplo1 = () => {
    // valor inicial para un contador
    const valorIncial = 0;

    // valor inicial para una persona

    const personaInicial = {
        nombre : "Juanito",
        email : "juanito@gmail.com",
    }

    // Queremos  en el VALORINICIAL  Y PERSONA INCIAL  sean parte del estado del componente
    // para asi poder gestionar su cambio  y este se vea reflejadop en la vista del componente.

    // ------------------------estructura del hook useState-----------------------------------
    // const [nombreVarible , funcionParaCambiar] = useState(valor inicial)

    const [contador, setContador] = useState(valorIncial);
    const [persona, setPersona] = useState(personaInicial);

    // FUNCION PARA ACTUALIZAR EL ESTADO DE CONTADOR

    function incrementarContador(){
        //? funcion paracambiar(variable + 1)
        setContador(contador + 1);
    }

    // FUNCION PARA ACTUALIZAR EL ESTADO DE PERSONA

    function actualizarPersona(){
        //? funcion paracambiar({valor de propiedades})
        setPersona({ 
            nombre : "Nelly",
            email : "nelly@gmail.com"
        })
    }

    return (
        <div>
            <h1>*********   Ejemplo de Hook useState() ***********</h1>

            <button>Contador : {contador}</button>
            <h2>datos de la persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* bloque de botones para actualizar los estados del componente */}
            <button onClick={incrementarContador}>Incrementar_Contador</button>
            <button onClick={actualizarPersona}>Cambiar_persona</button>
        </div>
    );
}

export default Ejemplo1;

