import { useState } from 'react';
import '../css/ItemDetail.css';
import ItemCount from './ItemCount.jsx';

function ItemDetail({ detalleProducto }) {
	const [cantidad, setCantidad] = useState(1);

	const {
		nombre,
		id,
		tipo,
		tagline,
		url,
		descripcion,
		descripcion_complemento,
		stock,
		precio,
	} = detalleProducto;

	return (
		<>
			<div className='itemDetail container-fluid' key={id}>
				<div className='producto_titulo text-center mt-3'>
					<h2>{nombre}</h2>
				</div>
				<div className='text-center'>
					<p className='text-center mt-1'>Tipo: {tipo}</p>
					<p className='text-center'>{tagline}</p>
				</div>
				<div className='cuerpo_info'>
					<div className='row'>
						<div className='producto_img justify-content-end align-items-center col-sm-12 col-lg-6 d-flex flex-column'>
							<img src={url} alt='' className='img-card' />
							<div className='descripcion_detail text-justify'>
								<p className='text-center font-italic'>{descripcion}</p>
								<p className='text-center'>{descripcion_complemento}</p>
							</div>
						</div>
						<div className='datos_extras col-sm-12 col-lg-6 d-flex flex-column justify-content-start align-items-centers'>
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
									cantidad={cantidad}
									setCantidad={setCantidad}
									detalleProducto={detalleProducto}
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