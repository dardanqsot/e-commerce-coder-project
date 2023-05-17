import { Link } from 'react-router-dom';
import '../css/Item.css';
import { IoMdCart } from 'react-icons/io';

//! Componente responsable de la creacion de los items. Crea el item con los datos que le pasamos, vinculando al map del ItemList.

//. Seteamos todos los estados iniciales
function Item({
	nombre,
	imagen,
	tipo,
	descripcion,
	precio,
	id,
	stock,
	categoria,
}) {
	return (
		<>
			<div key={id} categoria={categoria}>
				<div className='container'>
					<div className='cardProductos m-3 d-flex'>
						<div className='card-body text-center mt-3'>
							<h5 className='card-title fw-bolder'> {nombre} </h5>
							<p className='card-text'> {tipo} </p>
							<div className="img-producto">
								<img
									src={imagen}
									className='card-img-top img-productos img-fluid'
									alt='...'
								/>
							</div>
							<div className='item_descripcion'>
								<p className='mt-3'> {descripcion} </p>
								<p className='mt-3 fw-bold fs-5'> ${precio},00 </p>
							</div>
							<div className='d-flex gap-1 justify-content-center align-items-center py-auto m-2 flex-column'>
								<Link to={`/producto/${id}`}>
									<button
										type='button'
										className='btn bg-warning btn-unite text-uppercase m-3'>
										<span className='text-dark'>Comprar</span>
										<div className='liquid'></div>
									</button>
								</Link>
							</div>
							<span className='fw-bold'>Disponiblidad:</span>
							<span> {stock} unidades </span>
							<IoMdCart/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Item;
