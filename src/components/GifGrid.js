import { React} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

	const {data:images, loading} = useFetchGifs(category);
	
	return (
			<>
				<div>
					<h3>{ category }</h3>
					<p>{ loading && 'Cargando...' }</p>
					<div className="card-grid">
					{ 
						images.map( img => 
							{
								return <GifGridItem key={ img.id } { ...img } />
							}
						)
					}							
					</div>
				</div>
			</>
		);
}
