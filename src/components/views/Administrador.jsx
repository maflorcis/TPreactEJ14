import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import ItemReceta from "./Producto/ItemReceta";

import { Link} from "react-router-dom";


const Administrador = () => {
  const [recetas, setRecetas] = useState([])


  useEffect(()=>{

    // opcion 1
    consultarAPI().then((respuesta)=>{
      console.log(respuesta)
      setRecetas(respuesta)
    })

    // opcion 2
    // const consultaPrueba = async()=>{
    //   const prueba = await consultarAPI();
    //   console.log(prueba);
    // }
    // consultaPrueba();

  },[])

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-primary" to='/administrar/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>Duracion</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            recetas.map((receta)=> <ItemReceta key={receta.id} receta={receta}></ItemReceta> )
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;