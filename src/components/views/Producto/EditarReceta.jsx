import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditarReceta = () => {
return (
    <div className="container">
        <div>
            <h2>Editar Receta</h2>
            <hr></hr>

        </div>
    <Form>
      <Form.Group className="mb-3" controlId="editarNombreReceta">
        <Form.Label>Nombre Receta</Form.Label>
        <Form.Control type="text" placeholder="Ej. Café" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="editarDuracion">
        <Form.Label>Tiempo de preparación</Form.Label>
        <Form.Control type="text" placeholder="Ej. 50" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="editarImagen">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" />
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Select>
          <option>Fácil</option>
          <option>Difícil</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
       Guardar
      </Button>
    </Form>
    </div>
  );
}

export default EditarReceta;