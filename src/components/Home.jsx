import { useState } from 'react';
import ItemListContainer from './ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer.jsx';

function Home() {
	return (
		<div>
			<div className='container-fluid'>
				<div className='row d-flex justify-content-center m-2'>
					<div className='col-12 mt-5 text-center'>
						{' '}
						<h2>
							Bievenidos a <span className='titulo-logo'>Algoritmia!</span>{' '}
							<span className='subtitulo-logo'>La tecnología que necesitas</span>
						</h2>
					</div>
				</div>
			</div>
			<div>
				<div className='row'>
					<ItemListContainer/>
				</div>
			</div>
			<div className='row'>
				<ItemDetailContainer/>
			</div>
		</div>
	);
}

export default Home;
