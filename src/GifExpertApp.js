import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {	
	const [categories, setCategories] = useState(['Naruto']);	
	return (
			<>
				<h2>Gif Expert App</h2>						
				<AddCategory setCategories = { setCategories}  />
				<hr/>					
				{
					categories.map( (c,i) => {
						return <GifGrid key={c} category = {c} />;
					})
				}
				
			</>
		);
}

export default GifExpertApp;