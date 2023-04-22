import { Link } from 'react-router-dom';
import '../css/Item.css';
import ItemCount from './ItemCount.jsx';

//! Componente responsable de la creacion de los items. Crea el item con los datos que le pasamos, vinculando al map del ItemList.

//. Seteamos todos los estados iniciales
function Item({
	initial,
	onAdd,
	max,
	agregarCantidad,
	estilo,
	imagen,
	tagline,
	descripcion,
	precio,
	id,
	ValidarStock,
	validarCantidad,
	stock,
	categoria
}) {
	return (
		<>
			<div className='row' categoria={categoria} id={id}>
				<div className='container-fluid'>
					<div className='cardProductos m-3 d-flex'>
						<div className='card-body text-center mt-3'>
							<h5 className='card-title fw-bolder'> {estilo} </h5>
							<p className='card-text'> {tagline} </p>
							<img src={imagen} className='card-img-top' alt='...' />
							<div className='item_descripcion'>
								<p className='mt-3'> {descripcion} </p>
							</div>
							<div className='d-flex gap-4 justify-content-center'>
								<ItemCount
									onAdd={onAdd}
									initial={initial}
									max={max}
									precio={precio}
									agregarCantidad={agregarCantidad}
									ValidarStock={ValidarStock}
									validarCantidad={validarCantidad}
								/>
							</div>
							<div className='d-flex gap-3 justify-content-center align-items-center mt-1 flex-column'>
								<Link to={`/producto/${id}`}>
									<button
										type='button'
										className='btn card-btn-cart bg-warning btn_detail rounded-pill mb-2 justify-content-center'>
										Detalle
									</button>
								</Link>
							</div>
							<span className='fw-bold'>Disponiblidad:</span>
							<span> {stock} unidades </span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Item;
