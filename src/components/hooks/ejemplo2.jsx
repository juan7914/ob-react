/*

EJEMPLOS DE:

*-useState()
*-useEffect()
*-useRef()

*/ 

import React,{useRef , useState, useEffect} from 'react';

const Ejemplo2 = () => {

    // vamos a crear dos contadores distintos  cada uno con un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef()  para asociar una variable  con un elemento del DOM
    //del componente(vista HTML)

    const myRef = useRef();

    // crear la funciones que invremente cada uno de los contadoreso estados de la aplicacion

    function incrementar1 (){
        setContador1(contador1 + 1);
    }

    function incrementar2 (){
        setContador2(contador2 + 1);
    }

    // trabajando con el hook useEffect()
    //?  caso 1 : ejecutar siempre un snippet de  codigo
    //Cada que hay un cambio en el estado se ejecutara asquello que este dentro del hook useEffect()

    // useEffect(() => {

    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //     console.log("Mostrabdo referncia a elemento del DOM")
    //     console.log(myRef)
        
    // })

    //_____________________________________________________________________________________________________________________
    // _______________________________________________________________________________________________________________________
    
    // trabajando con el hook useEffect()
    //?  caso 2 : ejecutar solo cuando cambie el estado del contador 1 o contador2
    //cada vez que haya un cambio en el estado del contador 1  se ejecuta lo que diga useEffect();  
    //en caso de que cambien el estado de contador 2  se ejecuta lo que diga useEffect();  

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
         console.log("Mostrabdo referncia a elemento del DOM")
         console.log(myRef)       
    }, [contador1, contador2]);




    return (
        <div>
            <h1>*********   Ejemplo de Hook useState(), useEffect(), useRef() ***********</h1>

            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>

            {/* elemento por referencia */}

            <h3 ref={myRef}> Ejemplo de  elemento referenciado</h3>


            {/* botones para cabiar los estados del componente e neste caso invrementar los contadores */}

            <div>
                <button onClick={incrementar1}>Incrementar_Contador1</button>
                <button onClick={incrementar2}>Incrementar_Contador2</button>
            </div>

            
        </div>
    );
}

export default Ejemplo2;


