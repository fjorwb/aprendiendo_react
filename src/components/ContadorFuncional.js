import React, { useState, useEffect } from 'react';

const ContadorFuncional = ({inc, dec}) => {
  
  const [contador, setContador] = useState(0)

  //Ciclo de Vida
  // componentDidMount
  //  se ejecuta solamente al primer renderizado
  // useEffect(() => {
  //   // p ej Conectar a una API
  //   console.log('componentDidMount / El componente cargo por primera vez');
  // },[])

  //componentDidUpdate
  // Este hook se ejecuta cada ciclo de renderizado
  
  // useEffect(() => {
  //     console.log('componentDidUpdate / El componente se renderizo')
  // })    
  // componentDidUpdate + [dependency]
  //  se ejecuta cuando cambia el estado de la dependencia
  //  que le pasemos, en este caso 'contador'
  useEffect(() => {
    // console.log('componentDidUpdate + [] / El estado del contador cambio');
  },[contador])

  // componentWillUnmount
  //  cierra el componente
  //  p.ej cerramos la conexion a la API despues de utilizarla
  //       para evitar cobros(APIs de pago) y/o no desperdiciar 
  //       recursos
  // useEffect(() => {
  //   return(() => {
  //     console.log('componentWillUnmount / Adios componente!');
  //   })
  // },[])


  const incrementar = () => setContador(contador + inc)
  const decrementar = () => setContador(contador - dec)
  

  return (
    <div className='contador fondo-amarillo'>
      <h2>Contador</h2>
      <h1>{contador}</h1>
      <button className='btn azul' onClick={incrementar} >Incrementar</button>
      <button className='btn rojo' onClick={decrementar} >Decrementar</button>
    </div>
  )

}

export default ContadorFuncional