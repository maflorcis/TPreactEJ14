import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import ItemReceta from './Producto/ItemReceta';

const Administrador = () => {
return (
    <div className="container">
        <div className="d-flex justify-content-between my-3">
            <h2>Recetas Disponibles</h2>
             <Button variant="primary">Agregar</Button>{' '} 
        </div>
    <Table striped bordered hover>          
      <thead>                
        <tr>
          <th>Cod</th>
          <th>Receta</th>
          <th>Precio</th>
          <th>URL de la Imagen</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemReceta></ItemReceta>
      </tbody>
    </Table>
    </div>
  );
};

export default Administrador;