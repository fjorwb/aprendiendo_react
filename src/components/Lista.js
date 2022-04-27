import React from 'react';

const Lista = (props) => {
	const { list, color } = props;
	return (
		<div>
			<ul>
			{list.map((item, index) => {
				return (
					<li key={index} style={{ color: color }}>
						<h3>Item:... {item}</h3>
					</li>
				);
			})}
			</ul>
		</div>
	);
};

export default Lista;
