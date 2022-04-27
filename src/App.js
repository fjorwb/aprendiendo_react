import React, { useState } from 'react';

import './App.css';

import Usuario from './components/Usuario.js';
import Formulario from './components/Formlario';
// import Contador from './components/Contador';
// import ContadorFuncional from './components/ContadorFuncional';
import EjemploUseReducer from './components/EjemploUseReducer';
import Blog from './components/Blog'
function App() {
	const [sesion, setSesion] = useState(false);

	return (
		<div className="contenedor">
			<h1>React, Redux, FireBase</h1>
			<hr />
			{sesion ? (
				<div>
					<Usuario />
					<Blog/>
					<EjemploUseReducer/>
					{/* <Contador  className='contador' cantidadIncrementar={10} cantidadDecrementar={3} /> */}
					{/* <ContadorFuncional className='contador' inc={5} dec={2}/> */}
					<button onClick={() => setSesion(false)} className='boton'> Cerrar Sesion</button>
				</div>
			) : (
				<div>
					<h4>No has iniciado sesion</h4>
					<Formulario setSesion={setSesion} />
					{/* <button onClick={() => setSesion(true)}>Iniciar Sesion</button> */}
				</div>
			)}
		</div>
	);
}

export default App;
