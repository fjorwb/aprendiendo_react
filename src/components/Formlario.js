import React, { useState } from 'react';

import './Formulario.css'

const FormularioInicioSesion = ({setSesion}) => {
	const [usuario, setUsuario] = useState('');
	const [password, setPassword] = useState('');

  const onChange = (e) => {
    if(e.target.name === 'usuario') {
      setUsuario(e.target.value)
    };
    if(e.target.name === 'password') {
      setPassword(e.target.value)
    };
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(usuario === 'fernando' && password === '1234') {      setUsuario('')
      setPassword('')
      setSesion(true)

    } else {
      alert('datos incorrectos')
      setUsuario('')
      setPassword('')
    }
  }

	return (
		<form action="" onSubmit={onSubmit} className='formulario'>
			{/* <p>Usuario: {usuario} </p>
			<p>Contraseña: {password} </p> */}
			<div>
				<label htmlFor="usuario" className='label'>Usuario: </label>
				<input 
          name="usuario" 
          id="usuario" 
          type="text"
          value={usuario}
          onChange={onChange}
          className='input'
        />
				<label htmlFor="password" className='label'>password: </label>
				<input 
          name="password" 
          id="password" 
          type="password" 
          value={password}
          onChange={onChange}
          className='input'
        />
			</div>
			<button className='boton'>Iniciar Sesion</button>
		</form>
	);
};

export default FormularioInicioSesion;
