import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  //. Guardo el estado del producto en un array

  const [productoList, setProductoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  //= Cuando el componente se monta, se ejecuta el useEffect. Es una manera de informar que va a ser ejecutado una vez que el componente se monta.
  useEffect(() => {
    //= Obtengo la referencia a la base de datos
    const productosCollection = collection(FirebaseDB, "productos");
    //= Filtramos por categoria, caso el useParams Categoria exista.
    if (categoria) {
      setLoading(true);
      const q = query(productosCollection, where("categoria", "==", categoria));

      getDocs(q)
        .then((resultado) => {
			setProductoList(
            resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //= Caso el useParams Categoria no exista, simplemente trae toda la coleccion de objetos.
      getDocs(productosCollection)
        .then((resultado) => {
          setLoading(true);
          setProductoList(
            resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          setLoading(false);
        })

        .catch((error) => {
          console.log(error);
        });
    }
    /*
		fetch('../../productos.json')
			.then((resultado) => resultado.json())
			.then((resultado) => {
				setEstiloList(resultado);

				if (categoria !== undefined) {
					setEstiloList(resultado.filter(item => item.categoria === categoria)); //. Filtra el array de estilos por la categoria que se le pasa por parametro.
				} else {
					setEstiloList(resultado);
				}
			})
			.catch((error) => {
				console.log('Error', error);
			});	
			*/
  }, [categoria]);

  return (
    //. Retorno un componente ItemList con los datos del estado productoList. Asignamos productoList al array productos de ItemList.
    <>
      {loading ? (
        <div className="loading-page">
          <h2 className="text-warning text-center titulo-logo">Cargando...</h2>
        </div>
      ) : (
        <div>
          <ItemList productoList={productoList} />
        </div>
      )}
    </>
  );
}
export default ItemListContainer;
