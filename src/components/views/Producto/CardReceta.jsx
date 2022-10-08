import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardReceta() {
  return (
    <Card className="col-12 col-md-4 col-lg-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Brownie</Card.Title>
        <Card.Text>
             <p className="my-3">Duración: 2 hs</p>
         <hr></hr>
        </Card.Text>
        <Button variant="danger">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardReceta;