import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const ItemReceta = () => {
    return (
        <tr>
          <td>1</td>
          <td>Brownie</td>
          <td>4 horas</td>
          <td>https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
          <td>Dulce</td>
          <td>
            <Button variant="warning">Editar</Button>{' '}
            <Button variant="danger">Borrar</Button>{' '}
          </td>
        </tr>
    );
};

export default ItemReceta;