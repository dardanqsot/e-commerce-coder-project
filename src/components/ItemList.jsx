import Item from './Item.jsx';
//! Componente responsable de crear el listado de ITEMs. Usando las informaciones del componente ITEM, es hecho un mapeamento del objeto y luego retorna todos estos datos separados por props.

//. Funcion para mapear el objeto. Retorna un array (estilos) con todos los datos de cada item. Cada dato de cada item es guardado en la variable estilo y luego podemos acceder a todos sus valores a traves del .valor.
function ItemList({ estiloList, onAdd, sumarCarrito }) {


	return (
		<>
			<div className='d-flex'>
				{estiloList?.map((estilo) => {
					return (
						<Item
							precio={estilo.precio}
							estilo={estilo.estilo}
							tagline={estilo.tagline}
							imagen={estilo.url}
							id={estilo.id}
							onAdd={onAdd}
                            categoria={estilo.categoria}
							stock={estilo.stock}
							initial={1}
							max={estilo.stock}
							agregarCantidad={sumarCarrito}
							descripcion={estilo.descripcion}
							key={estilo.id}
						/>
					);
				})}
			</div>
		</>
	);
}
export default ItemList;