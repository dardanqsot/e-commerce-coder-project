import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import { FirebaseDB } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore/lite';

function ItemDetailContainer() {
	const [detalleProducto, setDetalleProducto] = useState([]);
	const { id } = useParams();

	useEffect(() => {

		const productoRef = doc(FirebaseDB, 'productos', id);

		getDoc(productoRef)
			.then((resultado) => {
				setDetalleProducto({ ...resultado.data(), id: resultado.id });
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<ItemDetail detalleProducto={detalleProducto} id={id}/>
			</div>
		</>
	);
}
export default ItemDetailContainer;