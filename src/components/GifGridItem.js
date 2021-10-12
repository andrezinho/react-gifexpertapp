import { React } from 'react';

export const GifGridItem = ( { id, title, url } ) => {
	return (
			<>
				<img className="card animate__animated animate__rubberBand" src={url} alt={title} />
			</>
		);
}
