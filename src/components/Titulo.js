import React from 'react';

import Lista from './Lista';

const Titulo = ({ nombre = 'usuario', color = 'grey', list }) => {
	const pais = 'Peru';
	return (
		<div>
			<h2 style={{ color: 'grey' }}>Hola, {nombre}!</h2>
			{pais && <h3>{pais}</h3>}
			<Lista list={list} color={color} />
		</div>
	);
};

export default Titulo;
