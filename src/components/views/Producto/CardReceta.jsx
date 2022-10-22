import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardReceta = ({receta}) => {


return (
     
    <Card className="col-12 col-md-4 col-lg-3 p-2 mb-2">
      <Card.Img variant="top" src={receta.imagen} />
      <Card.Body>
        <Card.Title>{receta.nombreReceta}</Card.Title>
        <Card.Text className="my-3">{receta.duracion}</Card.Text>
        <hr></hr>
        <Button variant="danger">Ver más</Button>
      </Card.Body>
    </Card>
    
  );
}


export default CardReceta;