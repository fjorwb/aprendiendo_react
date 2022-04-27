import React,{useReducer} from 'react';
import {Btn as Boton} from '../elementos/Btn'

 // action --> {type: ACTION}

 // Initial state
const contadorInicial = {contador: 0}

// Reducer
const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENTAR':
            return {contador: state.contador + 1}
        case 'DECREMENTAR':
            return {contador: state.contador - 1}
        case 'REINICIAR':
            return {contador: 0}
        default:
            return state
    }
}

const EjemploUseReducer  = () => {
    const [state, dispatch] = useReducer(reducer, contadorInicial) 



    return (
        <div>
            <div className='contador'>
            <h2>Contador</h2>
            <h1>{state.contador}</h1>
            <Boton
                className='azul'
                onClick={() => dispatch({type:'INCREMENTAR'})}
                >Incrementar
            </Boton>
            <Boton 

className='naranja' 
onClick={() => dispatch({type:'REINICIAR'})}
>Reiniciar
            </Boton>
            <Boton 
                className='rojo'
                onClick={() => dispatch({type:'DECREMENTAR'})}
                >Decrementar
            </Boton>
                </div>
        </div>
      );



}
 
      
export default EjemploUseReducer ;