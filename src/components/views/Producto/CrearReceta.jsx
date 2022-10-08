import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CrearReceta = () => {
return (
    <div className="container">
        <div>
            <h2>Nueva Receta</h2>
            <hr></hr>

        </div>
    <Form>
      <Form.Group className="mb-3" controlId="nuevoNombreReceta">
        <Form.Label>Nombre Receta</Form.Label>
        <Form.Control type="text" placeholder="Ej. Café" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoDuracion">
        <Form.Label>Duración</Form.Label>
        <Form.Control type="text" placeholder="Ej. 50" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoImagen">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" />
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Select>
          <option>Dulce</option>
          <option>Salado</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
       Guardar
      </Button>
    </Form>
    </div>
  );
}

export default CrearReceta;