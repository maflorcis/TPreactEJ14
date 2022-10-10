import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import ItemReceta from "./Producto/ItemReceta";



const Administrador = () => {
  const [recetas, setRecetas] = useState([])
    
    useEffect(()=> {
    
        //Opcion 1
    consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setRecetas(respuesta)
    })
     
     //OPCION 2
    // const consultaPrueba = async()=>{
    //   const prueba = await consultarAPI();
    //   console.log(prueba);
    //}
    //consultaPrueba();

    }, [])

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Button className="btn btn-primary" to='/administrar/crear'>
          Agregar
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {
            recetas.map((receta)=> <ItemReceta key={receta.id} receta={receta}></ItemReceta>)
        } 
         
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;