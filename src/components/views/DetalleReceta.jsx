import { Badge, Card, Col, Row } from 'react-bootstrap';
import React, {  useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import { obtenerRecetaAPI } from '../helpers/queries';
import Swal from "sweetalert2";



const DetalleReceta = () => {

    const [nombreReceta, setNombreReceta] = useState ();
const [categoria, setCategoria] = useState ();
const [duracion, setDuracion] = useState ();
const [imagen, setImagen] = useState ();

// traer el parámetro de la ruta
const {id} = useParams();


useEffect(()=>{
    obtenerRecetaAPI(id).then((respuesta)=>{
      if(respuesta.status===200){
        setNombreReceta(respuesta.dato.nombreReceta)
        setCategoria(respuesta.dato.categoria)
        setDuracion(respuesta.dato.duracion)
        setImagen(respuesta.dato.imagen)
      }else{
      Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])
    
    return (
        <Card className='container my-5 mainSection'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src={imagen} alt='brownie' className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3>{nombreReceta}</h3>
                <hr/>
                <Badge bg="success">{categoria}</Badge>
                <p className='mt-3'><b>Duración:{duracion}</b></p>
                <p>Esta receta es un clásico de la comida argentina. Se puede servir en todas las ocasiones. Los ingredientes se encuentran fácilmente en el supermercado y la preparación no es un desafío. Fácilmente lo puede realizar un principiante y maestro de las artes culinarias</p>
                </Col>
            </Row>
        </Card>
    );
};

export default DetalleReceta;