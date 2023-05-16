import '../css/ItemDetail.css';
import ItemCount from './ItemCount.jsx';
function ItemDetail({ detalleProducto }) {
	const {	nombre,
		id,
		producto,
		tagline,
		url,
		descripcion,
		descripcion_complemento,
    	stock,
		onAdd,
		precio,
		agregarCantidad,} = detalleProducto;

	return (
		<>
			<div className='itemDetail' key={id}>
				<div className='producto_titulo text-center mt-3'>
					<h2>{nombre}</h2>
				</div>
				<p className='text-center mt-1'>Tipo: {producto}</p>
				<p className='text-center'>{tagline}</p>
				<div className='cuerpo_info'>
					<div className='row'>
						<div className='producto_img justify-content-end align-items-center d-flex col-6 flex-column'>
							<img src={url} alt='' className='img-card' />
							<div className='descripcion_detail text-justify'>
								<p className='text-center font-italic'>{descripcion}</p>
								<p className='text-center'>{descripcion_complemento}</p>
							</div>
						</div>
						<div className='datos_extras col-6 d-flex flex-column align-items-center justify-content-center'>
							<p className='text-center'>
								Entregas a todo el pais hasta en 48h
							</p>
							<p className='text-center'>La mejor experiencia</p>
							<div className='count'>
								<ItemCount
									precio={precio}
									id={id}
									initial={1}
									max={stock}
									onAdd={onAdd}
									agregarCantidad={agregarCantidad}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ItemDetail;