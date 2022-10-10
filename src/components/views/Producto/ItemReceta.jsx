import { Button } from "react-bootstrap";
const ItemReceta = () => {


  return (
    <tr>
      <td>1</td>
      <td>cafe</td>
      <td>$300</td>
      <td>url</td>
      <td>dulce</td>
      <td>
        <Button variant="warning">
          Editar
        </Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;