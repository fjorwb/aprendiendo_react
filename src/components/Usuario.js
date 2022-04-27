import React from 'react';
import Titulo from './Titulo';

const Usuario = () => {
	const nombre = 'Fernando';
	const color = 'blue';
	const list = ['a', 'b', 'c'];

	return (
		<div className='titulo'>
			<Titulo nombre={nombre} color={color} list={list} />
		</div>
	);
};

export default Usuario;
