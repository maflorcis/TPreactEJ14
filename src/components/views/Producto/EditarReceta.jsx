import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const EditarReceta = () => {
const {register, handleSubmit, formState:{errors}} = useForm( 
  {defaultValues: {
    nombreReceta: "",
    duracion: 1,
    imagen: '',
    categoría:   ''
  }});

const onSubmit = (datos) =>{
  console.log(datos)
  console.log('desde nuestra función submit')
}



  return (
    <div className="container">
        <div>
            <h2>Editar Receta</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="editarNombreReceta">
        <Form.Label>Nombre Receta</Form.Label>
        <Form.Control type="text" 
        placeholder="Ej. Café"      
        {...register('nombreReceta', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 20 caracteres'
          }
        
        })} 
        />
        <Form.Text className="text-danger">{errors.nombreReceta?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="editarDuracion">
        <Form.Label>Duracion</Form.Label>
        <Form.Control
         type="text" 
         placeholder="Ej. 50" 
         {...register('duracion',{
          required: 'La duracion es un valor requerido',
          min:{
            value: 1,
            message: 'La duracion como mínimo debe ser de 1'
          },
          max:{
            value: 10000,
            message: 'La duracion de la receta máximo es 10000'
          }
        })} />
       <Form.Text className="text-danger">{errors.duracion?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="editarImagen">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" 
        {...register('imagen',{
          required:'La URL  de la imagen es obligatoria',
          pattern:{
              value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
              message:'Debe ingresar una URL válida'
          },
        })}
             />
      <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
        {...register ('categoria', {
          required:'Debe seleccionar una categoría',
          })}>
           <option value="">Seleccione una opcion</option>
            <option value="comida-caliente">Comida caliente</option>
            <option value="comida-fria">Comida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
        <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
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