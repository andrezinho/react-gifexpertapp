import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
	const [value, setValue] = useState('');
	const handleOnchange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(value.trim().length > 2){
			setCategories(cate => [value,...cate]);
			setValue('');
		}

	}
	return (
			<>
				<form onSubmit={ handleSubmit }>
					<input 
						type="text"
						value={value}
						placeholder="Buscar..."
						onChange={ handleOnchange }
					/>					
				</form>
			</>
		);
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}
