import Item from './Item.jsx';
//! Componente responsable de crear el listado de ITEMs. Usando las informaciones del componente ITEM, es hecho un mapeamento del objeto y luego retorna todos estos datos separados por props.

//. Funcion para mapear el objeto. Retorna un array (productos) con todos los datos de cada item. Cada dato de cada item es guardado en la variable estilo y luego podemos acceder a todos sus valores a traves del .valor.
function ItemList({ productoList, onAdd, categoria }) {


	return (
		<>
			<div className='container col-sm-12 col-lg-12 d-flex flex-row justify-content-around flex-wrap'>
				{productoList?.map((producto) => {
					return (
						<Item
							precio={producto.precio}
							nombre={producto.nombre}
							tipo={producto.tipo}
							tagline={producto.tagline}
							imagen={producto.url}
							id={producto.id}
							onAdd={onAdd}
                            categoria={categoria}
							stock={producto.stock}
							initial={1}
							max={producto.stock}
							descripcion={producto.descripcion}
							key={producto.id}
						/>
					);
				})}
			</div>
		</>
	);
}

export default ItemList;
